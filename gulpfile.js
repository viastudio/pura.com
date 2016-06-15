var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('less', function () {
    return gulp.src('webroot/src/app/index.less')
        .pipe(less())
        .pipe(concat('index.css'))
        .pipe(gulp.dest('webroot/dist/webroot/src/app/'));
});

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

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
        .on('error', handleErrors)
        .pipe(source(file))
        .pipe(gulp.dest('webroot/dist/'));
    }

    // listen for an update and run rebundle
    bundler.on('update', function () {
        rebundle();
        gutil.log('Rebundle...');
    });

    // run it once the first time buildScript is called
    return rebundle();
}

gulp.task('scripts', function () {
    return buildScript('webroot/src/app/index.js', false); // this will run once because we set watch to false
});

gulp.task('default', function () {
    gulp.watch('webroot/src/**/*.less', ['less']);
    return buildScript('webroot/src/app/index.js', true);
});
