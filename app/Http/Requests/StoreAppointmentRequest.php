<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAppointmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:60',
            'aadhaarNumber' => 'required|string|max:14',
            'mobileNumber' => 'required|string|max:12',
            'addressLine1' => 'required|string|max:255',
            'addressLine2' => 'nullable|string|max:255',
            'state' => 'required|string|max:50',
            'district' => 'required|string|max:50',
            'block' => 'nullable|string|max:50',
            'numberOfVisitors' => 'required|integer|min:1',
            'visitPurpose' => 'required|string',
            'visitDescription' => 'required|string|max:2000',
            'visitDate' => 'required|date',
            'visitTime' => 'required|string',
            'guestsList' => 'nullable|array',
        ];
    }
}
