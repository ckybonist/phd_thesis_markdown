'use strict';

const gulp = require('gulp'),
      server = require('gulp-webserver'),
      livereload = require('gulp-livereload'),
      run = require('gulp-run');

gulp.task('make:md', function() {
  gulp.src('source/*.md')
    .pipe(run('make pdf'))
    .pipe(run('make html'))
    .pipe(gulp.dest('output'))
    .pipe(livereload({start: true}));
});

gulp.task('watch', function() {
  //livereload.listen(9111);
  gulp.watch('source/*.md', ['make:md']);
});

gulp.task('server', ['watch'], function() {
  gulp.src('output')
    .pipe(server({
      port: 9112,
      livereload: true,
      fallback: 'thesis.html',
      /*
      directoryListing: {
        enable: true,
        path: 'output',
      },
      */
      open: true,
    }));
});
