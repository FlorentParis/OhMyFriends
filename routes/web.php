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
//Route::get('/home', function () {
//    return view('home');
//});

Route::get('/home', [\App\Http\Controllers\HomeController::class, 'home']);
Route::get('/test', [\App\Http\Controllers\testController::class, 'test']);
