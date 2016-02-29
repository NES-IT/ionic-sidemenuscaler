(function () {

  'use strict';

  try {
    angular.module('nes.ionic.sidemenuScaler');
  } catch (exception) {
    angular.module('nes.ionic.sidemenuScaler', []);
  }


  angular.module('nes.ionic.sidemenuScaler')
    .directive('sidemenuScaler', ['$timeout', '$ionicSideMenuDelegate', SidemenuScaler]);


  /**
   * Usage
   * wrap everything contained inside your <ion-side-menu-content> with this directive
   * That's it
   *
   *
   * @param $timeout
   * @param $ionicSideMenuDelegate
   * @returns {{restrict: string, scope: {minRatio: string}, link: link}}
   * @constructor
     */
  function SidemenuScaler($timeout, $ionicSideMenuDelegate) {
    return {
      restrict: 'E',
      scope: {
        minRatio: '='
      },
      link: function (scope, element, attrs) {
        var burgerButton = document.querySelector('ion-nav-bar ion-nav-buttons');
        var myDomElement = element[0];
        var minRatio = Math.abs(parseFloat(attrs.minRatio)) || 0.7;
        if(minRatio < 0.1) {
          minRatio = 0.1;
        }

        if(minRatio > 1) {
          minRatio = 1;
        }

        function scale(ratio) {
          if (myDomElement !== undefined) {
            myDomElement.style.webkitTransform = 'scale(' + ratio + ')';
          }

        }

        function menuCanBeShowed() {
          return !burgerButton.classList.contains('hide');
        }

        function handleMenuScale(right) {
          return function () {
            menuCanBeShowed() && scale(minOrOpenRatio(right))
          };
        }

        function minOrOpenRatio(inverse) {

          var openRatio = $ionicSideMenuDelegate.getOpenRatio();

          return (inverse === true)
            ? (1 - openRatio < minRatio) ? minRatio : 1 - openRatio
            : ((openRatio < minRatio) ? minRatio : openRatio);

        }

        function closeOrOpen() {
          $timeout(scale($ionicSideMenuDelegate.isOpen() ? minRatio : 1), 100);
        }

        ionic.EventController.on('dragleft', handleMenuScale());

        ionic.EventController.on('dragright', handleMenuScale(true));

        ionic.EventController.on('dragend', closeOrOpen);
        scope.$watch(function () {
          return $ionicSideMenuDelegate.isOpen();
        }, closeOrOpen);

      }
    }
  }


})();
