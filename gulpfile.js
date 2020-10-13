const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

// runs on `gulp`

gulp.task('build:css', () => {
  return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(rename('sprinkl.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('minify:css', () => {
  return gulp.src('./dist/sprinkl.css')
    .pipe(cleanCSS())
    .pipe(rename('sprinkl.min.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', gulp.series(['build:css', 'minify:css']))

gulp.task('watch', () => {
  gulp.watch('./scss/**/*.scss', gulp.task('default'))
})
