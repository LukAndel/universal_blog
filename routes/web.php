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
});

Route::get('article-creation',['App\Http\Controllers\ArticleCreation', 'create'])->name('article-creation');
Route::post('article-creation',['App\Http\Controllers\ArticleCreation', 'store']);

Route::get('article-creation/{id}',['App\Http\Controllers\ArticleCreation', 'show']);
Route::post('article-creation/{id}',['App\Http\Controllers\ArticleCreation', 'edit']);
Route::delete('article-creation/{id}',['App\Http\Controllers\ArticleCreation', 'delete']);


Route::get('/{name}/{id}',['App\Http\Controllers\ArticleCreation', 'display'])->name('article-show');

Route::get('page_creation', 'PageController@create');
