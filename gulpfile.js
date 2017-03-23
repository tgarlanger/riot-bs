var gulp = require('gulp');
var riot = require('gulp-riot');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify');
var babel = require('gulp-babel');
var eventStream = require('event-stream');
var del = require('del');
var webserver = require('gulp-webserver');

gulp.task('bundle', function () {
  var tagsStream = gulp.src('./src/**/*.tag')
        .pipe(riot({
          expr: true,
          type: 'es6'
        }))
        .pipe(babel({
          presets: ['es2015-riot']
        }));
  var es6Stream = gulp.src('./src/**/*.es6')
        .pipe(babel());
  eventStream.merge(tagsStream, es6Stream)
        .pipe(concat('riot-bs.js'))
        .pipe(minify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function(){
  gulp.watch('./src/**/*.tag',['bundle']);
  gulp.watch('./src/**/*.es6',['bundle']);
});

gulp.task('serve', function() {
  gulp.src('.')
  .pipe(webserver({
    port: '9000',
    livereload: true,
    fallback: 'index.html',
    open: true
  }));
});

gulp.task('clean', function() { del('dist/'); });
gulp.task('build', ['clean','bundle']);
gulp.task('default',['watch', 'serve']);
