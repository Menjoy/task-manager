var webserver = require('gulp-webserver');

module.exports = function(gulp, config) {
    gulp.task('server', function() {
        return gulp.src(config.dirs.dist)
            .pipe(webserver({
                fallback: 'index.html',
                liveReload: true,
                open: true
            }));
    });
};