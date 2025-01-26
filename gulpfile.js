import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );

import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import obfuscate from 'gulp-obfuscate';
import imagemin from 'gulp-imagemin';
/*
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimirImagens(){
        return gulp.src('source/images/*') // Substitua pelo caminho correto das suas imagens
            .pipe(imagemin())
            .pipe(gulp.dest('build/images'));
}

*/


function comprimirImagens(){
        return gulp.src('src/images/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/images'));
}

function comprimirJavaScript() {
    return gulp.src('./source/scripts/*.js')
    //para minificar o arquivo usamos uglify
    .pipe(uglify())
    //para deixar ilegível
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}


function compilaSass(){
    return gulp.src('./source/styles/main.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('./build/styles'));
}


function funcaoPadrao(callback){
    setTimeout(function() {
        console.log("executando via gulp");
        callback();
    }, 2000);
}

function dizOi(callback){
    console.log("Ola gulp");
    disTchau();
    callback();
}

function disTchau(){
    console.log("Tchau gulp");
}

//executando tarefas em series
//exports.default = gulp.series(funcaoPadrao, dizOi);
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
//function para que o gulp corra automaticamente cada vez que tiver
//alguma modificação nos arquivos scss
exports.watch = function(){
    gulp.watch('./source/styles/*.scss',{ ignoreInitial: false }, gulp.series(compilaSass));
}

exports.javascript = comprimirJavaScript;

exports.images = comprimirImagens;