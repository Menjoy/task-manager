var merge = require('merge-stream'),
    jade = require('gulp-jade'),
    htmlmin = require('gulp-htmlmin');

module.exports = function(gulp, config) {
    gulp.task('copy', function() {
        var index = gulp.src(config.dirs.src + '/index.html')
                .pipe(gulp.dest(config.dirs.dist));

        var templates = gulp.src(config.dirs.src + '/**/*.jade')
                .pipe(jade())
                .pipe(htmlmin())
                .pipe(gulp.dest(config.dirs.build + '/'))

    });
};