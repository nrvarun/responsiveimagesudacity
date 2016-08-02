var gulp = require('gulp');
var gutil  = require('gulp-util');
var image = require('gulp-image');
 
gulp.task('default', function () {
  gulp.src('./images_src/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true
    }))
    .pipe(gulp.dest('./images_src'));
});