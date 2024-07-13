<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('home', ['lirnui' => 'Laravel, Inertia, NextUI, TypeScript']);
});

Route::get('/secret', function () {
    return inertia('secret', ['lirnui' => 'Laravel, Inertia, NextUI, TypeScript']);
});

Route::get('/secret-button', function () {
    return inertia('button', ['lirnui' => 'Laravel, Inertia, NextUI, TypeScript']);
});
