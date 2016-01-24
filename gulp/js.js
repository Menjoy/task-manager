var concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

module.exports = function(gulp, config) {
    gulp.task('js', function() {
        return gulp.src([config.dirs.src + '/**/module.js', config.dirs.src + '/**/*.js'])
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .pipe(uglify({
                preserveComments: 'some',
                outSorceMap: true
            }))
            .pipe(gulp.dest(config.dirs.build + '/js'));
    });
};