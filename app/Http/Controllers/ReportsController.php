<?php

namespace App\Http\Controllers;

use App\Exports\AppointmentDailyExport;
use App\Exports\AppointmentMonthlyExport;
use App\Exports\AppointmentWeeklyExport;
use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReportsController extends Controller
{
    /**
     * Show the form for creating a daily report of appointments.
     */
    public function daily()
    {
        //
    }

    /**
     * Create the daily report of appointments.
     */
    public function dailyReport(Request $request)
    {
        $currentDate = Carbon::now();
        $requestDate = Carbon::parse($request->date);

        if ($requestDate->greaterThan($currentDate)) {
            return back()->with('error', 'You cannot select any future date.');
        }

        $data = Appointment::select(
            'serialNumber',
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
        )
            ->whereDate('created_at', $requestDate)
            ->get();

        if ($data->isEmpty()) {
            return back()->with('error', 'No records found.');
        }

        $fileName = 'daily-report-'.$requestDate->format('d-m-Y').'.xlsx';

        return Excel::download(new AppointmentDailyExport($data), $fileName);
    }

    /**
     * Show the form for creating a weekly report of appointments.
     */
    public function weekly()
    {
        //
    }

    /**
     * Create the weekly report of appointments.
     */
    public function weeklyReport(Request $request)
    {
        $currentDate = Carbon::now();
        $requestDate = Carbon::parse($request->date);

        if ($requestDate->greaterThan($currentDate)) {
            return back()->with('error', 'You cannot select any future date.');
        }

        $weekStart = $requestDate->startOfWeek();
        $weekEnd = $requestDate->endOfWeek();

        $data = Appointment::select(
            'serialNumber',
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
        )
            ->whereBetween('created_at', [$weekStart, $weekEnd])
            ->get();

        if ($data->isEmpty()) {
            return back()->with('error', 'No records found for the selected week.');
        }

        $fileName = 'weekly-report-'.$weekStart->format('d-m-Y').'-to-'.$weekEnd->format('d-m-Y').'.xlsx';

        return Excel::download(new AppointmentWeeklyExport($data), $fileName);
    }

    /**
     * Show the form for creating a monthly report of appointments.
     */
    public function monthly()
    {
        //
    }

    /**
     * Create the monthly report of appointments.
     */
    public function monthlyReport(Request $request)
    {
        $currentDate = Carbon::now();
        $requestDate = Carbon::parse($request->date);

        if ($requestDate->greaterThan($currentDate)) {
            return back()->with('error', 'You cannot select any future date.');
        }

        $monthStart = $requestDate->startOfMonth();
        $monthEnd = $requestDate->endOfMonth();

        $data = Appointment::select(
            'serialNumber',
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
        )
            ->whereBetween('created_at', [$monthStart, $monthEnd])
            ->get();

        if ($data->isEmpty()) {
            return back()->with('error', 'No records found for the selected month.');
        }

        $fileName = 'monthly-report-'.$monthStart->format('m-Y').'.xlsx';

        return Excel::download(new AppointmentMonthlyExport($data), $fileName);
    }
}
