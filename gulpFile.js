var gulp = require('gulp')
	,jshint = require('gulp-jshint')
	,jshintStylish = require('jshint-stylish')
	,browserSync = require("browser-sync");


gulp.task('server', function() {
	
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('js/*.js').on('change', function(event) {
		gulp.src(event.path)
			.pipe(jshint())
			.pipe(jshint.reporter(jshintStylish))
	});

	gulp.watch(['index.html', 'js/**/*', 'css/**/*']).on('change', browserSync.reload);
});