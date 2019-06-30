var gulp = require("gulp"),
  watch = require("gulp-watch"),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  browserSync = require('browser-sync').create();

gulp.task("default", function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task("html", function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task("styles", function() {
  return gulp
    .src(__dirname + "/app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest(__dirname + "/app/temp/styles"));
});

gulp.task("watch", function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  })
  watch(__dirname + "/app/index.html", function() {
    browserSync.reload();
  });

  watch(__dirname + "/app/assets/styles/**/*.pcss", function() {
    gulp.start("cssInject");
  });
});

gulp.task('cssInject', ['styles'], function() {
  return gulp
    .src(__dirname + '/app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});