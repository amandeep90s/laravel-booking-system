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
            'mobileNumber' => 'required|string|min:10|max:10',
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
            'guestsList.*.guestMobile' => 'required_with:guestsList|string|min:10|max:10',
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
            'name.required' => 'The name field is required.',
            'name.string' => 'The name must be a string.',
            'name.min' => 'The name must be at least 2 characters.',
            'name.max' => 'The name may not be greater than 60 characters.',
            'aadhaarNumber.required' => 'The Aadhaar number field is required.',
            'aadhaarNumber.string' => 'The Aadhaar number must be a string.',
            'aadhaarNumber.min' => 'The Aadhaar number must be exactly 12 characters.',
            'aadhaarNumber.max' => 'The Aadhaar number must be exactly 12 characters.',
            'mobileNumber.required' => 'The mobile number field is required.',
            'mobileNumber.string' => 'The mobile number must be a string.',
            'mobileNumber.min' => 'The mobile number must be exactly 10 characters.',
            'mobileNumber.max' => 'The mobile number must be exactly 10 characters.',
            'addressLine1.required' => 'The address line 1 field is required.',
            'addressLine1.string' => 'The address line 1 must be a string.',
            'addressLine1.max' => 'The address line 1 may not be greater than 255 characters.',
            'addressLine2.string' => 'The address line 2 must be a string.',
            'addressLine2.max' => 'The address line 2 may not be greater than 255 characters.',
            'state.required' => 'The state field is required.',
            'state.string' => 'The state must be a string.',
            'state.max' => 'The state may not be greater than 50 characters.',
            'district.required' => 'The district field is required.',
            'district.string' => 'The district must be a string.',
            'district.max' => 'The district may not be greater than 50 characters.',
            'block.string' => 'The block must be a string.',
            'block.max' => 'The block may not be greater than 50 characters.',
            'numberOfVisitors.required' => 'The number of visitors field is required.',
            'numberOfVisitors.integer' => 'The number of visitors must be an integer.',
            'numberOfVisitors.min' => 'The number of visitors must be at least 1.',
            'visitPurpose.required' => 'The visit purpose field is required.',
            'visitPurpose.string' => 'The visit purpose must be a string.',
            'visitDescription.required' => 'The visit description field is required.',
            'visitDescription.string' => 'The visit description must be a string.',
            'visitDescription.max' => 'The visit description may not be greater than 2000 characters.',
            'visitDate.required' => 'The visit date field is required.',
            'visitDate.date' => 'The visit date must be a valid date.',
            'visitTime.required' => 'The visit time field is required.',
            'visitTime.string' => 'The visit time must be a string.',
            'guestsList.array' => 'The guests list must be an array.',
            'guestsList.*.guestName.required_with' => 'The guest name is required when guests are present.',
            'guestsList.*.guestName.string' => 'The guest name must be a string.',
            'guestsList.*.guestName.min' => 'The guest name must be at least 2 characters.',
            'guestsList.*.guestName.max' => 'The guest name may not be greater than 60 characters.',
            'guestsList.*.guestMobile.required_with' => 'The guest mobile number is required when guests are present.',
            'guestsList.*.guestMobile.string' => 'The guest mobile number must be a string.',
            'guestsList.*.guestMobile.min' => 'The guest mobile number must be exactly 10 characters.',
            'guestsList.*.guestMobile.max' => 'The guest mobile number must be exactly 10 characters.',
            'guestsList.*.guestAadhaar.required_with' => 'The guest Aadhaar number is required when guests are present.',
            'guestsList.*.guestAadhaar.string' => 'The guest Aadhaar number must be a string.',
            'guestsList.*.guestAadhaar.min' => 'The guest Aadhaar number must be exactly 12 characters.',
            'guestsList.*.guestAadhaar.max' => 'The guest Aadhaar number must be exactly 12 characters.',
        ];
    }
}
