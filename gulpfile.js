const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const html_min = require('gulp-htmlmin')
const css_min = require('gulp-cssmin')
const js_min = require('gulp-jsmin')
const img_min = require('gulp-imagemin')
const webp = require('gulp-webp')

function svgsprite(){
    let config = {
        mode: {
            symbol: {
                dest : '.',
                sprite: 'sprite.svg'
            }
        }
    };

    return gulp.src("./images/svg/*.svg")      
        .pipe(svgSprite(config)).on('error', function(error){ console.log(error); })
        .pipe(gulp.dest("./"))
        .pipe(gulp.dest("./build"))
}

function html () {
    return gulp.src('./index.html')
        .pipe(html_min({ collapseWhitespace: true }))
        .pipe(gulp.dest('./build'));
}

function css () {
    return gulp.src('./css/main.css')
        .pipe(css_min())
        .pipe(gulp.dest('./build/css'));
}

function js () {
    return gulp.src('./js/*.js')
        .pipe(js_min())
        .pipe(gulp.dest('./build/js'));
}

function image () {
    return gulp.src('./images/ordinary/**')
        .pipe(img_min())
        .pipe(webp())
        .pipe(gulp.dest('./images/compressed'))
        .pipe(gulp.dest('./build/images/compressed'))
}

exports.svgsprite = svgsprite
exports.compress_images = image
exports.build = gulp.series(html, css, js, svgsprite, image)