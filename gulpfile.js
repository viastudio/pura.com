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
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    scripts: ['webroot/src/index.js'],
    styles: ['webroot/src/index.less']
};

var mapOptions = {
    includeContent: false,
    sourceRoot: '../../source/webroot/src'
};

var bundle = (files, watch) => {
    var props = {
        entries: files,
        debug : true,
        cache: {},
        packageCache: {},
        transform: [
            babelify.configure({stage: 0})
        ]
    };

    var bundler = watch ? watchify(browserify(props)) : browserify(props);
    var rebundle = () => {
        return bundler
            .bundle()
            .pipe(source('index.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write(mapOptions))
            .pipe(gulp.dest('webroot/dist/'));
    };

    bundler.on('update', (ids) => {
        rebundle();
        gutil.log('Updated', gutil.colors.cyan(ids));
    });

    return rebundle();
};

gulp.task('styles', () => {
    return gulp
        .src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat('index.css'))
        .pipe(sourcemaps.write(mapOptions))
        .pipe(gulp.dest('webroot/dist/'));
});

gulp.task('scripts', () => {
    return bundle(paths.scripts, false);
});

gulp.task('watch', () => {
    gulp.watch(paths.styles, ['styles']);
    bundle(paths.scripts, true);
});

gulp.task('default', ['scripts', 'styles']);
