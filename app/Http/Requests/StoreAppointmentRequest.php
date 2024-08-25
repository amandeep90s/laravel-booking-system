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
            'name' => 'required|string|min:2|max:60',
            'aadhaarNumber' => 'required|string|min:14|max:14',
            'mobileNumber' => 'required|string|min:10|max:12',
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
            'guestsList.*.guestName' => 'required_with:guestsList|string|min:2|max:60',
            'guestsList.*.guestMobile' => 'required_with:guestsList|string|min:10|max:12',
            'guestsList.*.guestAadhaar' => 'required_with:guestsList|string|min:14|max:14',
        ];
    }

    /**
     * Get the custom validation messages for the request.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'aadhaarNumber.min' => 'The Aadhaar number must be at least 12 characters.',
            'aadhaarNumber.max' => 'The Aadhaar number may not be greater than 12 characters.',
            'guestsList.*.guestName.required_with' => 'The guest name is required when guests are present.',
            'guestsList.*.guestName.string' => 'The guest name must be a string.',
            'guestsList.*.guestName.max' => 'The guest name may not be greater than 255 characters.',
            'guestsList.*.guestMobile.required_with' => 'The guest mobile number is required when guests are present.',
            'guestsList.*.guestMobile.string' => 'The guest mobile number must be a string.',
            'guestsList.*.guestMobile.min' => 'The guest mobile number must be at least 10 characters.',
            'guestsList.*.guestMobile.max' => 'The guest mobile number may not be greater than 12 characters.',
            'guestsList.*.guestAadhaar.required_with' => 'The guest Aadhaar number is required when guests are present.',
            'guestsList.*.guestAadhaar.string' => 'The guest Aadhaar number must be a string.',
            'guestsList.*.guestAadhaar.min' => 'The guest Aadhaar number must be at least 12 characters.',
            'guestsList.*.guestAadhaar.max' => 'The guest Aadhaar number may not be greater than 12 characters.',
        ];
    }
}
