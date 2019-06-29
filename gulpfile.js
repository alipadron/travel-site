var gulp = require("gulp"),
  watch = require("gulp-watch"),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import');

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
  watch(__dirname + "/app/index.html", function() {
    gulp.start("html");
  });

  watch(__dirname + "/app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });
});
