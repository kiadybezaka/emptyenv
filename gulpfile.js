var gulp = require('gulp'); // Needed to run gulp
var sass = require('gulp-sass'); // Needed to run SCSS/Sass preprocessor
var browserSync = require('browser-sync'); // Needed to run Live Reload
var jade = require('gulp-jade'); // HTML preprocesor
var runSequence = require('run-sequence'); // Needed for default file
var browserify = require('gulp-browserify');
var server = require('gulp-express');
var open = require('gulp-open');
// Uncomment to enable auto-clean (Must uncomment config further down page)
// var del = require('del'); // Cleans up any unnecessary files that were auto-generated

// Preprocessor task
gulp.task('sass', function() {
  return gulp.src('app/sass/styles.scss') // SCSS/Sass path here, change to .scss if needed
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('public/styles')) // Target SCSS/Sass file here
    .pipe(browserSync.reload({ // Added into SCSS/Sass config to work with Live Reload
      stream: true
    }));
})

// HTML Preprocessor - Comment/delete if not needed

gulp.task('jade', function() {
    return gulp.src('app/views/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({ // Added into SCSS/Sass config to work with Live Reload
      stream: true
    }));
})


// js
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('app/scripts/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./public/scripts'))
});

// Watches file for changes
gulp.task('watch', ['browserSync', 'sass', 'jade'], function () {
  gulp.watch('app/sass/*.scss', ['sass']);
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('app/views/*.jade', ['jade']);
  gulp.watch('app/views/**/*.jade', ['jade']);
  gulp.watch('app/scripts/*.js', ['scripts']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch(['app.js', 'app/routes/*.js', 'app/controllers/*.js'], [server.run]);
});

// Live Reload
gulp.task('browserSync', function() {
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true
  })
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("*.css").on("change", browserSync.reload);
  gulp.watch("*.js").on("change", browserSync.reload);

});
//task server to run express
gulp.task('server', function () {
    // Start the server at the beginning of the task
    server.run(['app.js']);
});
//task uri to open the environment automatically
gulp.task('uri', function(){
  gulp.src(__filename)
  //.pipe(open({uri: 'http://localhost:3000'}));
});
gulp.task('default', function(callback) {
  runSequence(['sass', 'jade', 'scripts', 'watch','server','uri'],
    callback
  )
})
