module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          'dev/styles/main.css': 'src/styles/main.less',
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          'dist/styles/main.css': 'src/styles/main.less',
        },
      },
    },
    watch: {
      less: {
        files: ['src/styles/**/*.less'],
        tasks: ['less:development'],
      },
      replace: {
        files: ['src/index.html'],
        tasks: ['replace:dev'],
      },
    },
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_CSS',
              replacement: './styles/main.css',
            },
            {
              match: 'ENDERECO_JS',
              replacement: '../src/scripts/main.js',
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./src/index.html'],
            dest: 'dev/',
          },
        ],
      },
      dist: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_CSS',
              replacement: './styles/main.css',
            },
            {
              match: 'ENDERECO_JS',
              replacement: './scripts/main.min.js',
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./prebuild/index.html'],
            dest: 'dist/',
          },
        ],
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          'prebuild/index.html': 'src/index.html',
        },
      },
    },
    uglify: {
      target: {
        files: {
          'dist/scripts/main.min.js': 'src/scripts/main.js',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('default', ['watch', 'replace']);
  grunt.registerTask('build', [
    'htmlmin:dist',
    'replace:dist',
    'less:production',
    'uglify',
  ]);
};
