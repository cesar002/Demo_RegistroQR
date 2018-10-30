const { parallel } = require('gulp');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }

function cssBuild(cb) {

}

function jsBuild(cb) {
  pump([
    gulp.src('public/javascripts/*.js'),
    uglify(),
    gulp.dest('build')
  ], cb);
}
  
exports.default = parallel(cssBuild, jsBuild);