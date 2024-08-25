<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAppointmentRequest;
use App\Http\Requests\UpdateAppointmentRequest;
use App\Models\Appointment;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Appointment', [
            'status' => session('status'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAppointmentRequest $request)
    {
        // Check if an appointment with the same visitDate and visitTime already exists
        $existingAppointment = Appointment::where('visitDate', $request->visitDate)
            ->where('visitTime', date('H:i:s', strtotime($request->visitTime)))
            ->where('visitPurpose', $request->visitPurpose)
            ->first();

        if ($existingAppointment) {
            return back()->withErrors(['visitDate' => 'An appointment at this date and time already booked.']);
        }

        // Create a new appointment
        Appointment::create([
            'name' => $request->name,
            'aadhaarNumber' => $request->aadhaarNumber,
            'mobileNumber' => $request->mobileNumber,
            'addressLine1' => $request->addressLine1,
            'addressLine2' => $request->addressLine2,
            'state' => $request->state,
            'district' => $request->district,
            'block' => $request->block,
            'numberOfVisitors' => $request->numberOfVisitors,
            'visitPurpose' => $request->visitPurpose,
            'visitDescription' => $request->visitDescription,
            'visitDate' => $request->visitDate,
            'visitTime' => date('H:i:s', strtotime($request->visitTime)),
            'guestsList' => json_encode($request->guestsList),
        ]);

        session()->flash('status', 'Your appointment booked successfully!');

        return to_route('appointment');
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAppointmentRequest $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
