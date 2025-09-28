<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware([])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('orders', function () {
    return Inertia::render('orders');
})->name('orders');

Route::get('employees', function () {
    return Inertia::render('employees');
})->name('employees');

Route::get('customers', function () {
    return Inertia::render('customers');
})->name('coustomers');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
