var gulp = require('gulp');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minify',function(){
    gulp.src('./App/Content/css/style.css')
        .pipe(concat('num.css'))
        .pipe(minify())
        .pipe(gulp.dest('css'));
});
gulp.task('uglify',function(){
    gulp.src('./App/app.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
})
gulp.task('default',['minify','uglify']);