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

Route::get('article_creation', ['App\Http\Controllers\ArticleCreation', 'create']);
Route::post('article_creation', ['App\Http\Controllers\ArticleCreation', 'store']);

Route::get('/{name}/{id}', ['App\Http\Controllers\ArticleCreation', 'display']);

Route::get('page_creation', 'PageController@create');
