const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const buble = require("gulp-buble");
const autoPrefixer = require("gulp-autoprefixer");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const minify = require("gulp-minify");
const cssMinify = require("gulp-minify-css");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const zip = require("gulp-zip");
const livereload = require("gulp-livereload");

// Define Files That Will Be Compiled
const originFiles = {
  cssFiles: "app/sass/*.scss",
  jsFiles: "app/js/*.js",
  htmlFiles: "app/html/*.pug",
  imgPathQuestion: "app/images/question/**",
  imgPathAnswer: "app/images/answer/**",
  icons: "app/icons/**",
};
// Define The Finales Files
const distFiles = {
  cssDist: "dist/css",
  jsDist: "dist/js",
  htmlDist: "dist/",
  imgPathQuestion: "dist/assets/logoQuestion/",
  imgPathAnswer: "dist/assets/logoAnswer/",
  icons: "dist/assets/icons/",
};

async function cssTask() {
  return src(originFiles.cssFiles)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoPrefixer())
    .pipe(cssMinify())
    .pipe(sourcemaps.write("."))
    .pipe(plumber.stop())
    .pipe(dest(distFiles.cssDist))
    .pipe(livereload());
}
async function pugTask() {
  return src(originFiles.htmlFiles)
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest(distFiles.htmlDist))
    .pipe(livereload());
}

async function jsTask() {
  return src(originFiles.jsFiles)
    .pipe(concat("main.js"))
    .pipe(buble())
    .pipe(minify())
    .pipe(dest(distFiles.jsDist))
    .pipe(livereload());
}
async function imgPathQuestion() {
  return src(originFiles.imgPathQuestion)
    .pipe(newer(distFiles.imgPathQuestion))
    .pipe(
      imagemin({
        optimizationLevel: 10,
      })
    )
    .pipe(dest(distFiles.imgPathQuestion))
    .pipe(livereload());
}
async function imgPathAnswer() {
  return src(originFiles.imgPathAnswer)
    .pipe(newer(distFiles.imgPathAnswer))
    .pipe(
      imagemin({
        optimizationLevel: 10,
      })
    )
    .pipe(dest(distFiles.imgPathAnswer))
    .pipe(livereload());
}
async function icons() {
  return src(originFiles.icons)
    .pipe(newer(distFiles.icons))
    .pipe(
      imagemin({
        optimizationLevel: 10,
      })
    )
    .pipe(dest(distFiles.icons))
    .pipe(livereload());
}

async function compressZip() {
  return src("dist/**/*.*").pipe(zip("mySite.zip")).pipe(dest("."));
}

async function watchTask() {
  require("./server");
  livereload.listen();
  watch(
    [
      originFiles.cssFiles,
      originFiles.htmlFiles,
      originFiles.jsFiles,
      originFiles.imgPathAnswer,
      originFiles.imgPathQuestion,
      originFiles.icons,
      "app/html/includes/",
    ],
    series(
      parallel(pugTask, cssTask, jsTask, imgPathQuestion, imgPathAnswer, icons)
    )
  );
  livereload();
}
exports.default = series(
  parallel(
    cssTask,
    pugTask,
    jsTask,
    imgPathQuestion,
    imgPathAnswer,
    icons,
    compressZip,
    watchTask
  )
);
