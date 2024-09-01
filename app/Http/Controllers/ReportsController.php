<?php

namespace App\Http\Controllers;

use App\Exports\AppointmentDailyExport;
use App\Exports\AppointmentMonthlyExport;
use App\Exports\AppointmentWeeklyExport;
use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Maatwebsite\Excel\Facades\Excel;

class ReportsController extends Controller
{
    const FILE_EXTENSION = '.xlsx';

    private $selectColumns = [
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
    ];

    public function daily(): Response
    {
        return $this->showReportForm('reports/appointments/Daily');
    }

    public function dailyReport(Request $request)
    {
        return $this->generateReport($request, 'daily');
    }

    public function weekly(): Response
    {
        return $this->showReportForm('reports/appointments/Weekly');
    }

    public function weeklyReport(Request $request)
    {
        return $this->generateReport($request, 'weekly');
    }

    public function monthly(): Response
    {
        return $this->showReportForm('reports/appointments/Monthly');
    }

    public function monthlyReport(Request $request)
    {
        return $this->generateReport($request, 'monthly');
    }

    /**
     * Show the form for creating a report of appointments.
     */
    private function showReportForm(string $view): Response
    {
        return Inertia::render($view, [
            'status' => session('status'),
        ]);
    }

    /**
     * Generate the report of appointments.
     */
    private function generateReport(Request $request, string $type)
    {
        $requestDate = Carbon::parse($request->date);

        switch ($type) {
            case 'daily':
                $dateRange = [$requestDate->startOfDay(), $requestDate->endOfDay()];

                $fileName = 'daily-report-'.$requestDate->format('d-m-Y').self::FILE_EXTENSION;
                $exportClass = AppointmentDailyExport::class;
                break;
            case 'weekly':
                $dateRange = [$requestDate->startOfWeek(), $requestDate->endOfWeek()];
                $fileName = 'weekly-report-'.$dateRange[0]->format('d-m-Y').'-to-'.$dateRange[1]->format('d-m-Y').self::FILE_EXTENSION;
                $exportClass = AppointmentWeeklyExport::class;
                break;
            case 'monthly':
                $dateRange = [$requestDate->startOfMonth(), $requestDate->endOfMonth()];
                $fileName = 'monthly-report-'.$dateRange[0]->format('m-Y').self::FILE_EXTENSION;
                $exportClass = AppointmentMonthlyExport::class;
                break;
            default:
                return back()->with('error', 'Invalid report type.');
        }

        $data = Appointment::select($this->selectColumns)
            ->whereBetween('created_at', $dateRange)
            ->get();

        if ($data->isEmpty()) {
            return back()->with('error', "No records found for the selected {$type} period.");
        }

        return Excel::download(new $exportClass($data), $fileName);
    }
}
