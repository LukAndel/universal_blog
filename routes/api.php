<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/page-creation/data', 'PageController@data');
Route::get('/page-creation/sections', 'PageController@getSections');
Route::get('/page-creation/colorsets', 'PageController@getColorsets');
Route::get(
    '/',
    function () {
        return json_encode(['message' => 'hello']);
    }
);

Route::get('/{name}/articles', 'BlogController@getArticles');
Route::get('/{name}/article/{id}', 'BlogController@getArticle');
Route::get('/{name}/user', 'BlogController@getUser');
Route::get('/{name}/categories', 'BlogController@getCategories');
Route::get('/{name}/sections', 'BlogController@getsections');
