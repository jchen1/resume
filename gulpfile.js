var gulp = require('gulp');

var gulpSass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

// Compile Our Sass
function sass() {
    return gulp.src('scss/*.scss')
        .pipe(gulpSass())
        .pipe(autoprefixer({browsers:['> 1%'], cascade: false}))
        .pipe(gulp.dest('css'));
}

function css() {
    return gulp.src('css/*.css')
        .pipe(clean({compatibility: 'ie8'}))
        .pipe(concat('resume.min.css'))
        .pipe(gulp.dest('dist/css'));
}

function watch() {
    gulp.watch('scss/*.scss', sass);
    gulp.watch('css/*.css', css);
}

// Default Task
exports.watch = watch;
exports.default = watch;
