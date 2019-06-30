var gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require('browser-sync').create();

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