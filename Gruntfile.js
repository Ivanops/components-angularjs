module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['src/**/*.*'],
        options: {
          interrupt:true
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : ['src/**/*.*']
        },
        options: {
          watchTask: true,
          proxy: 'http://127.0.0.1:3000'
        }
      }
    },

    express: {
      dev: {
        options: {
          script: 'src/server/server.js'
        }
      }
    },

    wiredep: {
      task: {
        src: ['src/client/index.html']
      }
    }

  });


  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep')

  grunt.registerTask('default', ['express', 'wiredep', 'browserSync', 'watch']);
}