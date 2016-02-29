module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'dist/nes.sidemenuscaler.min.js': ['src/sidemenuscaler.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/nes-ionic-scaler.min.css': ['src/sidemenuscaler.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
    grunt.registerTask('default', ['uglify', 'cssmin']); // Default grunt tasks maps to grunt
};