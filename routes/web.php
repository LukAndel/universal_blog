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
    return view('welcome');
})->name('home');

Route::get('article-creation', 'ArticleCreation@create')->name('article-creation');
Route::post('article-creation', 'ArticleCreation@store');

Route::get('article-creation/{id}', 'ArticleCreation@show');
Route::put('article-creation/{id}', 'ArticleCreation@edit');
Route::delete('article-creation/{id}', 'ArticleCreation@delete');

Route::get('/page-creation', 'PageController@create')->name('page-creation');
Route::post('/page-creation', 'PageController@store');


Route::get('upload', 'UploadController@display')->name('upload');
Route::post('upload', 'UploadController@store');



Route::get('article/{id}', 'ArticleCreation@display')->name('article-show');

Route::get('/{name}/{path?}', 'BlogController@display')->name('blog')->where('path', '.*');
