<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
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
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:100',
            'aadhaarNumber' => 'required|string|max:20',
            'mobileNumber' => 'required|string|max:20',
            'addressLine1' => 'required|string|max:255',
            'addressLine2' => 'nullable|string|max:255',
            'state' => 'required|string|max:100',
            'district' => 'required|string|max:100',
            'block' => 'nullable|string|max:100',
            'numberOfVisitors' => 'required|integer|min:1',
            'purposeSubject' => 'required|string|max:255',
            'purposeDescription' => 'required|string|max:1500',
            'visitDate' => 'required|date',
            'visitTime' => 'required|date_format:H:i:s',
            'guestsList' => 'nullable|string',
        ];
    }
}
