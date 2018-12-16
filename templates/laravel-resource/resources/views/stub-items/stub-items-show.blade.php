@extends('spark::layouts.app')

@section('content')
    <div class="container">
        <!-- Stub Items Dashboard -->
        <div class="row">
            <div class="col-md-10 offset-md-1">
                @if ($message = \Session::get('status'))
                    <div class="alert alert-success alert-block">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        <strong>\{{ $message }}</strong>
                    </div>
                @endif
                <div class="card card-default">
                    <div class="card-header">
                        \{{__('stub_items.stub_items')}}
                        <a href="\{{ route('stub-items.edit', ['id' => $stub_item->id]) }}" class="btn btn-primary float-right">
                            \{{__('stub_items.edit_stub_item')}} <span class="fal fa-fw fa-btn fa-edit"></span>
                        </a>
                    </div>
                    <div class="card-body">
                        {{#each fields}}
                        <div class="row">
                            <div class="col-2 text-right">
                                <label>\{{__('stub_items.attributes.{{this.name}}')}}</label>
                            </div>
                            <div class="col-10">\{{ $stub_item->{{this.name}} }}</div>
                        </div>
                        {{/each}}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
