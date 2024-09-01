<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

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
        $visitPurpose = $request->visitPurpose;

        switch ($type) {
            case 'daily':
                $query = Appointment::select($this->selectColumns)
                    ->whereDate('visitDate', $requestDate->format('Y-m-d'));
                break;
            case 'weekly':
                $startDate = $requestDate->startOfWeek()->format('Y-m-d');
                $endDate = $requestDate->endOfWeek()->format('Y-m-d');
                $query = Appointment::select($this->selectColumns)
                    ->whereBetween('visitDate', [$startDate, $endDate]);
                break;
            case 'monthly':
                $startDate = $requestDate->startOfMonth()->format('Y-m-d');
                $endDate = $requestDate->endOfMonth()->format('Y-m-d');
                $query = Appointment::select($this->selectColumns)
                    ->whereBetween('visitDate', [$startDate, $endDate]);
                break;
            default:
                return response()->json(['error' => 'Invalid report type.']);
        }

        if (! empty($visitPurpose)) {
            $query->where('visitPurpose', $visitPurpose);
        }

        $data = $query->get();

        if ($data->isEmpty()) {
            return response()->json(['message' => "No records found for the selected {$type} period."]);
        }

        return response()->json($data);
    }
}
