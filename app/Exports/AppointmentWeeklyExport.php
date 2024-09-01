<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class AppointmentWeeklyExport implements FromView
{
    public $data;

    /**
     * Constructs a new instance of the class.
     *
     * @param  mixed  $data  the request date parameter
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Returns a View object for the 'exports.daily' view, passing in the
     * 'data' property of the current instance.
     */
    public function view(): View
    {
        return view('exports.appointments.weekly', [
            'data' => $this->data,
        ]);
    }
}
