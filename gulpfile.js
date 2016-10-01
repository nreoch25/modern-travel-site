var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("default", function() {
  console.log("Gulp Default Task");
});

gulp.task("html", function() {
  console.log("Gult HTML Task");
});

gulp.task("styles", function() {
  console.log("Gult Styles Task");
});

gulp.task("watch", function() {
  watch("./app/index.html", function() {
    gulp.start("html");
  });
  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });
});
