var gulp = require('gulp');

var connect = require('gulp-connect');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
gulp.task('default',['allFile','server','watch','sass']);

gulp.task('sass',function(){
  return gulp.src('app/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('allFile',function(){
  gulp.src('app/**/*',['allFile'])
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());

})

gulp.task('watch',function(){
  gulp.watch('app/**/*',['allFile','sass']);
})

gulp.task('server',function(){
  connect.server({
    root:'dist',
    livereload:true,
    port:8181
    
  });
})