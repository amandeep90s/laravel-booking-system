<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('aadhaarNumber', 20);
            $table->string('mobileNumber', 20);
            $table->string('address');
            $table->string('state', 100)->nullable();
            $table->string('district', 100);
            $table->string('block', 100)->nullable();
            $table->integer('numberOfVisitors');
            $table->string('purposeSubject');
            $table->text('purposeDescription')->nullable();
            $table->dateTime('visitDate');
            $table->text('guestsList')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
