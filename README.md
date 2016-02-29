# ionic-sidemenuscaler
NES custom side menu scale animation for the standard ionic side menu

We needed to achieve an effect similiar as seen on [codrops](myVerySlowToLoadImagesArray)

So we built a little directive to obtain that effect.

![alt text](https://raw.githubusercontent.com/NewEasySoft/ionic-sidemenuscaler/master/Schermata.2016-02-29.alle.18.17.03.png "Preview")


## Installation
Via bower 

```javascript
bower install nes-ionic-sidemenuscaler --save
```

## Usage
Include the `.js` and the `.css` included in the `dist` folder, add the module `nes.ionic.sidemenuScaler`to your module dependencies and wrap everything contained inside your `<ion-side-menu-content>` with the `<sidemenu-scaler>` directive.
That's it.

the `min-ratio` attribute is not compulsory, and dictates the minimum scale value accepted for your side menu.

```html
<ion-side-menus enable-menu-with-back-views="false">
  <ion-side-menu-content>
    <sidemenu-scaler min-ratio="0.9">
      <ion-nav-bar class="bar-stable">
        <ion-nav-back-button>
        </ion-nav-back-button>

        <ion-nav-buttons side="left">
          <button class="button button-icon button-clear ion-navicon" menu-toggle="left">
          </button>
        </ion-nav-buttons>
      </ion-nav-bar>
      <ion-nav-view name="menuContent"></ion-nav-view>
    </sidemenu-scaler>

  </ion-side-menu-content>

  <ion-side-menu side="left">
    <ion-header-bar class="bar-stable">
      <h1 class="title">Left</h1>
    </ion-header-bar>
    <ion-content>
      <ion-list>
        <ion-item menu-close ng-click="login()">
          Login
        </ion-item>
        <ion-item menu-close href="#/app/search">
          Search
        </ion-item>
        <ion-item menu-close href="#/app/browse">
          Browse
        </ion-item>
        <ion-item menu-close href="#/app/playlists">
          Playlists
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-side-menu>
</ion-side-menus>

```
