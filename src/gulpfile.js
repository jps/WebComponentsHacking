var gulp = require('gulp');
var gls = require('gulp-live-server')

gulp.task('default', function() {


});


gulp.task('serve', function() {
    var server = new gls('./server.js');
    server.start();
});

