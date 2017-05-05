// -----------------------------------------------------------------------------
// Gulp
// -----------------------------------------------------------------------------

const gulp = require('gulp');
const concat = require('gulp-concat');

// -----------------------------------------------------------------------------
// Postcss
// -----------------------------------------------------------------------------

const postcss = require('gulp-postcss');
const sugarss = require('sugarss');

const processors = [
    require('precss'),
    require('postcss-calc')({ mediaQueries: true }),
    require('autoprefixer'),
    require('css-mqpacker')
    // require('cssnano')
];

// -----------------------------------------------------------------------------
// Config
// -----------------------------------------------------------------------------

// const config = require('./config.js');

// Entries ---------------------------------------------------------------------

var source = [
    'postcss/base.sss',
    'postcss/grid/01-container.sss',
    'postcss/grid/04-helper.sss',
    'postcss/nav/01-bar.sss',
    'postcss/nav/02-menu.sss',
    'postcss/nav/03-logo.sss',
    '../custom/*'
    // 'postcss/grid/02-row.sss',
    // 'postcss/grid/03-col.sss',
    // 'css/postcss/navbar/navbar-mobile.sss',
    // 'css/postcss/navbar/navbar-desktop.sss',
    // 'css/postcss/navbar/icon.sss',
    // 'css/postcss/navbar/logo.sss',
    // 'css/postcss/navbar/sidebar.sss',
    // 'css/postcss/navbar/bar.sss',
    // 'css/postcss/list/list.sss',
    // 'css/postcss/list/balloon-chat.sss',
    // 'css/postcss/transition/transition.sss',
    // 'css/postcss/form/*',
    // 'css/postcss/table.sss',
    // 'css/postcss/card.sss',
    // 'css/postcss/typography.sss',
    // 'css/postcss/list.sss',
    // 'css/postcss/icon.sss',
];

// -----------------------------------------------------------------------------

gulp.task('default', function() {
    return gulp.src(source)
        .pipe(concat('style.min.css'))
        .pipe(postcss(processors, { parser: sugarss }))
        .pipe(gulp.dest('../'));
});

gulp.task('watch:css', function() {
    gulp.watch(source, ['default']);
});
