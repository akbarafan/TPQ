<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MateriController;
use App\Http\Controllers\PresensiController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\RecapPresensiController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ViewRecapController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('category', CategoryController::class);
Route::apiResource('presensi', PresensiController::class);
Route::apiResource('recap', RecapPresensiController::class);
Route::apiResource('materi', MateriController::class);
Route::apiResource('quiz', QuizController::class);



Route::post('/login', [UserController::class, 'login']);


Route::post('/getCategory', [CategoryController::class, 'getCategory']);


Route::post('/showPresensi', [PresensiController::class, 'showPresensi']);
Route::post('/showPresensiUsr', [PresensiController::class, 'showPresensiUsr']);
Route::put('/presensi', [PresensiController::class, 'update']);


Route::get('/recap/{id_user}/today', [RecapPresensiController::class, 'checkToday']);


Route::post('/recap/showRecapTcr', [ViewRecapController::class, 'showRecapTcr']);
Route::post('/recap/showRecapUsr', [ViewRecapController::class, 'showRecapUsr']);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
