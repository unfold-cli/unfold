<?php

namespace App\Http\Requests\StubItem;

use Illuminate\Foundation\Http\FormRequest;

class StubItemUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $stub_item = $this->route('stub_item');
        return $stub_item && $this->user()->can('edit', $stub_item);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
