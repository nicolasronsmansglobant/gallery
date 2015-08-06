'use strict';

module.exports = function (grunt) {
  grunt.initConfig({

    connect: {
      all: {
        options: {
          hostname: '*',
          port: process.env.PORT || '6789',
          base: '.',
          livereload: true
        }
      }
    },

    watch: {
      general: {
        files: ['index.html', 'tests/**/*.js'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-bump');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('start', ['connect', 'watch']);
  grunt.registerTask('default', ['start']);
};
