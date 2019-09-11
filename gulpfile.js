const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        rename = require('gulp-rename');


//sass.compiler = require('node-sass');

gulp.task('sass', () => {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass({
            outputStyle: 'nested', //compressed
            sourceComments: true
        }   
        ))//pasamos el plugin
        //.pipe(rename('main.css'))
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./assets/css'));
});




gulp.task('default', () => {
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
});