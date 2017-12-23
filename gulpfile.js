var gulp = require('gulp')
, exec = require('child_process').exec,node;
var del = require('del');

var paths = {
    scripts: ['.angular-cli.json'],
  };
  
  // Not all tasks need to use streams
  // A gulpfile is just another node program and you can use any package available on npm
  gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build']);
  });
  
  gulp.task('scripts', ['clean'], function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
      return exec('ng build');
    // exec('ng build', function (err, stdout, stderr) {
    //     console.log(stdout);
    //     console.log(stderr);
    //     cb(err);
    //   });
  });
  
  gulp.task('nodestart', function (cb) {
    if (node) node.kill()
  
    exec('node server.js', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  })
  // Rerun the task when a file changes
  gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
  });
  
  // The default task (called when you run `gulp` from cli)
  gulp.task('default', ['watch', 'scripts','nodestart']);