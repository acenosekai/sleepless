/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function (grunt) {

    grunt.config.set('copy', {
        dev: {
            files: [{
                expand: true,
                cwd: './assets',
                src: ['**/*.!(coffee|less)'],
                dest: '.tmp/public'
            }, {
                // adding useful js from bower componenets
                expand: true,
                cwd: './bower_components',
                src: [
                  'angular/angular.js',                 
                  'angular-ui-router/release/angular-ui-router.js',
                  'html5-boilerplate/js/vendor/modernizr-2.6.2.min.js'
                ],
                flatten: true,
                dest: '.tmp/public/js/dependencies'
            },{
                expand:true,
                cwd:'./bower_components',
                src:[
                    'html5-boilerplate/css/normalize.css',
                    'html5-boilerplate/css/main.css'
                ],
                flatten:true,
                dest:'.tmp/public/styles'
            }]
        },
        build: {
            files: [{
                expand: true,
                cwd: '.tmp/public',
                src: ['**/*'],
                dest: 'www'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};