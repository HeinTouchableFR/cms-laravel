<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class TemplateContentFormRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'min:3'],
            'slug' => ['required', 'min:3'],
            'description' => [''],
            'content' => [''],
            'online' => ['required', 'boolean'],
            'type' => ['required', 'in:header,footer,template'],
            'attachment_id' => [''],
            'created_at' => ['required'],
        ];
    }
}
