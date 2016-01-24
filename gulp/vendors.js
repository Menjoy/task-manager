var concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

module.exports = function(gulp, config) {
    gulp.task('vendors', function() {
        return gulp.src(config.vendors)
            .pipe(concat('vendors.js'))
            .pipe(uglify())
            .pipe(gulp.dest(config.dirs.build + '/js'));
    });
};