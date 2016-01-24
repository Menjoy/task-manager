var autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css'),
    scss = require('gulp-sass');

module.exports = function(gulp, config) {
    gulp.task('scss', function() {
        return gulp.src(config.dirs.src + '/scss/style.scss')
            .pipe(scss({errLogToConsole: true}))
            .pipe(autoprefixer('last 2 versions'))
            .pipe(minify())
            .pipe(gulp.dest(config.dirs.build + '/css'));
    });
};