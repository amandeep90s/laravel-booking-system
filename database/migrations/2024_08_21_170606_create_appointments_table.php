<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->string('serialNumber')->unique();
            $table->string('name', 100);
            $table->string('aadhaarNumber', 20);
            $table->string('mobileNumber', 20);
            $table->string('addressLine1');
            $table->string('addressLine2')->nullable();
            $table->string('state', 100);
            $table->string('district', 100);
            $table->string('block', 100)->nullable();
            $table->integer('numberOfVisitors');
            $table->string('visitPurpose');
            $table->text('visitDescription')->nullable();
            $table->date('visitDate');
            $table->time('visitTime');
            $table->text('guestsList')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
