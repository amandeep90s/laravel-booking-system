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

    Route::get('reports/daily', [ReportsController::class, 'daily'])->name('reports.daily');
    Route::post('reports/daily', [ReportsController::class, 'dailyReport'])->name('reports.daily-create');
    Route::get('reports/weekly', [ReportsController::class, 'weekly'])->name('reports.weekly');
    Route::post('reports/weekly', [ReportsController::class, 'weeklyReport'])->name('reports.weekly-create');
    Route::get('reports/monthly', [ReportsController::class, 'monthly'])->name('reports.monthly');
    Route::post('reports/monthly', [ReportsController::class, 'monthlyReport'])->name('reports.monthly-create');
});

require __DIR__.'/auth.php';
