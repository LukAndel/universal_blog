<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('article-creation','ArticleCreation@create')->name('article-creation');
Route::post('article-creation','ArticleCreation@store');

Route::get('article-creation/{id}','ArticleCreation@show');
Route::post('article-creation/{id}','ArticleCreation@edit');
Route::delete('article-creation/{id}','ArticleCreation@delete');


Route::get('/{name}/{id}','ArticleCreation@display')->name('article-show');

Route::get('page-creation', 'PageController@create');
