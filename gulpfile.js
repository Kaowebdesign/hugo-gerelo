var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    del = require('del'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    exec = require('child_process').execSync;

gulp.task('sass', function() { //Таск для пошуку sass файлів
    return gulp.src('src/sass/**/*.scss') /*Обираємо всі файли з даним розширенням*/
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('src/css/')) /*Результат кладемо в папку css*/
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});


// gulp.task('clean', function() {
//     return del.sync('static/css');
// });

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('watch', ['browser-sync', 'build'], function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('build', ['clean', 'sass'], function() {
    // gulp.src('src/css/style.css').pipe(gulp.dest('src/css'));

});

gulp.task('default', ['watch']);