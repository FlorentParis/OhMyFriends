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

Route::get('/', [\App\Http\Controllers\HomeController::class, 'home']);

Route::get('/404', function () {
    return view('404');
});

Route::get('/three', function () {
    return view('three');
});

//Route Test pour la récup des données en json
Route::get('/test', [\App\Http\Controllers\testController::class, 'test']);
