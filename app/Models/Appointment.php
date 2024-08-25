<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'aadhaarNumber',
        'mobileNumber',
        'addressLine1',
        'addressLine2',
        'state',
        'district',
        'block',
        'numberOfVisitors',
        'visitPurpose',
        'visitDescription',
        'visitDate',
        'visitTime',
        'guestsList',
    ];
}
