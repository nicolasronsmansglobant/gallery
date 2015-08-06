'use strict';

module.exports = function (grunt) {
  grunt.initConfig({

    hogan: {
      all: {
        src: 'js/src/**/*.mustache',
        dest: 'js/src/template.js',
        options: {
          binderName: 'amd'
        }
      }
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'js/src/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

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
      js: {
        files: ['Gruntfile.js', 'js/src/**/*.{js,mustache}', '!js/src/template.js'],
        tasks: ['js'],
        options: {
          livereload: true
        }
      },
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
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-hogan');

  grunt.registerTask('js', ['jshint', 'hogan']);
  grunt.registerTask('build', ['js']);
  grunt.registerTask('start', ['build', 'connect', 'watch']);
  grunt.registerTask('default', ['start']);
};
