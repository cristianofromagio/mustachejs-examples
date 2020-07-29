const gulp = require('gulp');
const mustache = require('gulp-mustache-inverted');
const rename = require('gulp-rename');

gulp.task('json2html', function() {
	return gulp.src('./src/*.json')
		.pipe(mustache('./src/mustache.mustache', { extension: '.html' }))
		.pipe(gulp.dest('./dist'));
});

gulp.task('mustache2html', function() {
	return gulp.src('./src/*-html.mustache')
		.pipe(mustache('./src/principal.json', { extension: '.html' }))
		.pipe(gulp.dest('./dist'));
});

// src
// 	file1
// 		template.mustache
// 	file2
// 		template.mustache
// 	principal.json
// 	dist
// 		file1
// 			index.html
// 		file2
// 			index.html

gulp.task('template-folder', function() {
	return gulp.src('./src/*/template.mustache', { base: './src/'})
		.pipe(mustache('./src/principal.json', { extension: '.html' }))
		.pipe(rename(function (path) {
			path.basename = 'index';
			console.log(path);
		})
		).pipe(gulp.dest('./dist'));
});

