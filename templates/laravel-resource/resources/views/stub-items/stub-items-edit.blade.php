@extends('spark::layouts.app')

@section('content')
    <stub-items-edit :stub-item="\{{ json_encode($stub_item) }}" inline-template>
        <div class="container">
            <!-- Stub Items Dashboard -->
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="row">
                        <div class="col">
                            <a href="\{{ route('stub-items.index') }}" class="btn btn-default mb-3">
                                <span class="fal fa-fw fa-btn fa-arrow-left"></span> \{{ __('stub_items.back_to_stub_items') }}
                            </a>
                        </div>
                    </div>
                    <div class="card card-default">
                        <div class="card-header">
                            \{{__('stub_items.edit_stub_item')}}
                        </div>
                        <div class="card-body">
                            <form class="form" @submit.prevent="submit">
                                {{#each fields}}
                                <div class="form-group" :class="{'has-error': form.errors.has('{{this.name}}')}">
                                    <label class="control-label">\{{__('stub_items.attributes.{{this.name}}')}}</label>
                                    <input type="text" class="form-control" name="{{this.name}}" v-model="form.{{this.name}}">
                                    <span class="help-block text-danger" v-show="form.errors.has('{{this.name}}')">@\{{ form.errors.get('{{this.name}}') }}</span>
                                </div>
                                {{/each}}
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary" :disabled="form.busy">
                                        <span v-if="form.busy">
                                        \{{__('Submit')}} <i class="fal fa-fw fa-btn fa-spinner fa-spin"></i>
                                        </span>
                                        <span v-else>
                                            \{{__('Submit')}} <i class="fal fa-fw fa-btn fa-arrow-right"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </stub-items-edit>
@endsection
