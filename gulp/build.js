module.exports = function(gulp, config) {
    gulp.task('build', ['lint', 'js', 'vendors', 'scss', 'copy']);

    gulp.task('default', ['build']);

    gulp.task('dev', ['build'], function() {
        gulp.watch(config.dirs.src + '/**/*.js', ['lint', 'js']);
        gulp.watch(config.dirs.src + '/**/*.jade', ['copy']);
        gulp.watch(config.dirs.src + '/**/*.scss', ['scss']);
    });
};