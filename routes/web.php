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

Route::get('calendar', function () {
    return Inertia::render('apps/calendar');
})->name('calendar');

Route::get('kanban', function () {
    return Inertia::render('apps/kanban');
})->name('kanban');

Route::get('editor', function () {
    return Inertia::render('apps/editor');
})->name('editor');


Route::get('color-picker', function () {
    return Inertia::render('apps/colorPicker');
})->name('color-picker');



require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
