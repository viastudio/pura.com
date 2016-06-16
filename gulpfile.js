var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');

var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');


var paths = {
    scripts: 'webroot/src/app/index.js',
    styles: 'webroot/src/**/*.less'
};

gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']}
        ))
        .pipe(concat('index.css'))
        .pipe(gulp.dest('webroot/dist/'));
});

function buildScript(file, watch) {
    var props = {
        entries: [file],
        debug : true,
        cache: {},
        packageCache: {},
        transform:  [babelify.configure({stage : 0 })]
    };
    // watchify() if watch requested, otherwise run browserify() once
    var bundler = watch ? watchify(browserify(props)) : browserify(props);

    function rebundle() {
        var stream = bundler.bundle();
        return stream
        .pipe(source('index.js'))
        .pipe(gulp.dest('webroot/dist/'));
    }

    bundler.on('update', function () {
        rebundle();
        gutil.log('Rebundle...');
    });

    return rebundle();
}

gulp.task('scripts', function () {
    return buildScript(paths.scripts, true);
});
gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
