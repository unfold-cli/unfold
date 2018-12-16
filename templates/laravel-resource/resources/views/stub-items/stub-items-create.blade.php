@extends('spark::layouts.app')

@section('content')
    <stub-items-create inline-template>
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
                            \{{__('stub_items.create_stub_item')}}
                        </div>
                        <div class="card-body">
                            <form class="form" @submit.prevent="submit">
                                \{{--Text--}}
                                {{#each fields}}
                                {{#if (eq this.type 'boolean')}}
                                <b-form-group label="{{ this.name }}" label-for="{{this.name}}Field" :state="!form.errors.has('{{this.name}}')" :invalid-feedback="form.errors.get('{{this.name}}')">
                                    <b-form-checkbox id="{{this.name}}Field" v-model="form.{{this.name}}">{{this.name}}</b-form-checkbox>
                                </b-form-group>
                                {{/if}}
                                {{#if (eq this.type 'string')}}
                                <b-form-group label="{{ this.name }}" label-for="{{this.name}}Field" :state="!form.errors.has('{{this.name}}')" :invalid-feedback="form.errors.get('{{this.name}}')">
                                    <b-form-input id="{{this.name}}Field" v-model="form.{{this.name}}" type="text"></b-form-input>
                                </b-form-group>
                                {{/if}}
                                {{#if (eq this.type 'integer')}}
                                <b-form-group label="{{ this.name }}" label-for="{{this.name}}Field" :state="!form.errors.has('{{this.name}}')" :invalid-feedback="form.errors.get('{{this.name}}')">
                                    <b-form-input id="{{this.name}}Field" v-model="form.{{this.name}}" type="number"></b-form-input>
                                </b-form-group>
                                {{/if}}
                                {{#if (eq this.type 'text')}}
                                <b-form-group label="{{ this.name }}" label-for="{{this.name}}Field" :state="!form.errors.has('{{this.name}}')" :invalid-feedback="form.errors.get('{{this.name}}')">
                                    <b-form-textarea id="{{this.name}}Field" v-model="form.{{this.name}}"></b-form-textarea>
                                </b-form-group>
                                {{/if}}
                                {{#if (eq this.type 'date')}}
                                <b-form-group label="{{ this.name }}" label-for="{{this.name}}Field" :state="!form.errors.has('{{this.name}}')" :invalid-feedback="form.errors.get('{{this.name}}')">
                                    <v-date-picker id="{{this.name}}Field" mode='single' :show-popover="false" v-model="form.{{this.name}}"></v-date-picker>
                                </b-form-group>
                                {{/if}}
                                {{/each}}
                                \{{--Date--}}
                                \{{--DateTime--}}
                                \{{--DateTimeTz--}}
                                \{{--Number--}}
                                \{{--Json--}}
                                \{{--Select--}}
                                \{{--Multiselect--}}
                                \{{--Time--}}
                                \{{--Time--}}
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
    </stub-items-create>
@endsection
