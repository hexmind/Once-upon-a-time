module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-bower-install');

  grunt.initConfig({
    bowerInstall: {
      target: {
        src: ['app/index.html'],
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    }
  });

};
