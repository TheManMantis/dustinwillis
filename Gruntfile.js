'use strict';
module.exports = function(grunt) {

  // ----------------------------------------------------------
  // WARNING, BRAVE DEVELOPER
  // ----------------------------------------------------------
  // Webhook allows you to use local grunt tasks and files.
  // However, these tasks are ONLY RUN LOCALLY and not when
  // your live site needs to be rebuilt. This means you should
  // only use grunt for pre-processing tasks like building
  // Sass, less or coffescript files, not for reading things
  // from your templates and making dynamic changes during
  // the build process. Doing so will cause your live site
  // not to regenerate.
  //
  // You have been warned!
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          // We used the expanded style because Webhook already minifies CSS when it deploys your site.
          style: 'expanded',
          require:'susy'

          // Uncomment the below line to include outside directories as well.
          // loadPath: ['location/of/other/sass']
        },
        files: [{
          // Files in the /sass/ directory will go to /static/css/ when processed.
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      }
    },
    watch: {
          sass : {
            files: ['sass/**/*.scss'],
            tasks: ['sass', 'build']
          }
    }
  });

grunt.loadNpmTasks('grunt-contrib-sass');
  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
};
