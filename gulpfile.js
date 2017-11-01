const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const hbs = require('gulp-hbs');
const fs = require('fs');
const browserSync = require('browser-sync').create();

gulp.task('clean', function() {
  return gulp.src(['public/*', 'public/img'], { read: false }).pipe(clean());
});

gulp.task('sass', function() {
  return gulp
    .src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  hbs.registerPartial(
    'example',
    fs.readFileSync('templates/partials/example.hbs', 'utf8')
  );
  return gulp
    .src('json/**/*.json')
    .pipe(hbs(gulp.src('templates/*.hbs')))
    .pipe(htmlmin())
    .pipe(gulp.dest('public/'));
});

gulp.task('build', function() {
  return runSequence('clean', [
    'sass',
    'html'
    // 'prod-images',
    // 'javascript',
    // 'copy-resources'
  ]);
});

gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: './public'
  });

  // gulp.watch('images/**/*', ['prod-images']).on('change', browserSync.reload);
  // gulp.watch('js/**/*.js', ['js-watch']);
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch(['templates/**/*.hbs', 'json/**/*.json'], ['html']);
});

