module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
             dist: {
                src: ['js/vendor/*.js', 'js/app.js', 'js/foundation/foundation.js', 'js/foundation/foundation.dropdown.js', 'js/foundation/foundation.tooltips.js'],
                dest: 'js/build/production.js'
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'build/js/production.min.js'
            }
        },

        cssmin: {
          combine: {
            files: {
              'css/build/production.css': ['css/normalize.css', 'css/foundation.css', 'css/general_foundicons.css', 'css/app.css' /*'!general_foundicons.css'*/]
            }
          },
          minify: {
            expand: true,
            cwd: 'css/build/',
            src: ['*.css', '!*.min.css'],
            dest: 'build/css',
            ext: '.min.css'
          }
        }

     /*watch: {
        scripts: {
            files: [
                    'js/vendor/*.js', // All JS in the libs folder
                    'js/foundation/*.js'  // This specific file
                ],
            tasks: ['concat', 'uglify'],
            options: {
                spawn: false,
            },
        }
    } */

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt.loadNpmTasks('grunt-contrib-watch');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
