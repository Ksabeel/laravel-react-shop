<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImagesController;
use App\Http\Controllers\ProductVariantsController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::resource('categories', CategoryController::class)->names('categories');
    Route::resource('products', ProductController::class)->names('products');
    Route::resource('colors', ColorController::class)->names('colors');

    Route::post('products/{product}/image', [ProductImagesController::class, 'store'])->name('products.images.store');

    Route::get('products/{product}/variants/create', [ProductVariantsController::class, 'create'])->name('products.variants.create');
    Route::post('products/{product}/variants', [ProductVariantsController::class, 'store'])->name('products.variants.store');
});

require __DIR__.'/settings.php';
