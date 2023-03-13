const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function minifyImages() {
  return gulp
    .src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function compileSass() {
  return gulp
    .src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed',
      })
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

function minifyJavascript() {
  return gulp
    .src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}

exports.default = function () {
  gulp.watch(
    './src/images/*',
    { ignoreInitial: false },
    gulp.series(minifyImages)
  );
  gulp.watch(
    './src/styles/main.scss',
    { ignoreInitial: false },
    gulp.series(compileSass)
  );
  gulp.watch(
    './src/scripts/*.js',
    { ignoreInitial: false },
    gulp.series(minifyJavascript)
  );
};
