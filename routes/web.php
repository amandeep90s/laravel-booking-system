<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PressMediaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('about-us', [AboutUsController::class, 'index'])->name('about-us');
Route::get('contact-us', [ContactUsController::class, 'index'])->name('contact-us');
Route::get('history', [HistoryController::class, 'index'])->name('history');
Route::get('press-media', [PressMediaController::class, 'index'])->name('press-media');
Route::get('appointment', [AppointmentController::class, 'index'])->name('appointment');
Route::post('appointment', [AppointmentController::class, 'store'])->name('appointment-store');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('reports/daily', [ReportsController::class, 'edit'])->name('reports.daily');
    Route::get('reports/weekly', [ReportsController::class, 'edit'])->name('reports.weekly');
    Route::get('reports/monthly', [ReportsController::class, 'edit'])->name('reports.monthly');
});

require __DIR__.'/auth.php';
