<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Booking extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'aadhaarNumber',
        'mobileNumber',
        'address',
        'state',
        'district',
        'block',
        'numberOfVisitors',
        'purposeSubject',
        'purposeDescription',
        'visitDate',
        'visitTime',
        'guestsList',
    ];
}
