var source = require('vinyl-source-stream');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    scripts: ['webroot/src/**/*js'],
    styles: ['webroot/src/index.less']
};

var mapOptions = {
    includeContent: false,
    sourceRoot: '../../source/webroot/src'
};

var handleError = function (error) {
    gutil.log(gutil.colors.red(error.toString()));
    this.emit('end');
};

function onBuild(done) {
    return function (err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function (key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });
            if (done) {
                done();
            }
        }
    }
}

gulp.task('webpack', function (done) {
    webpack(webpackConfig).run(onBuild(done));
});

gulp.task('styles', () => {
    return gulp
    .src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(less())
    .on('error', handleError)
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .on('error', handleError)
    .pipe(concat('index.css'))
    .pipe(sourcemaps.write(mapOptions))
    .pipe(gulp.dest('webroot/dist/css'));
});

gulp.task('copyfonts', function () {
    return gulp
    .src('./node_modules/font-awesome/fonts/**/*.*')
    .pipe(gulp.dest('./webroot/dist/fonts'));
});

gulp.task('watch', () => {
    gulp.watch('webroot/src/**/*.less', ['styles']);
    gulp.watch(paths.scripts, ['webpack']);
});

gulp.task('default', ['copyfonts', 'webpack', 'styles']);
