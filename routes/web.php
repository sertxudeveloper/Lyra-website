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

Route::get('docs/assets/{asset}', 'DocsController@asset')->where('asset', '.*');

Route::get('docs/{locale?}/{version?}/{path?}','DocsController@index')
  ->where('locale', '(\w+){2}')
  ->where('version', 'v[0-9].x')
  ->where('path', '.*');

Route::get('docs/{path?}','DocsController@index')->where('path', '.*');
