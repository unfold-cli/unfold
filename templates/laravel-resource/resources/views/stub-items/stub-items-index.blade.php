@extends('spark::layouts.app')

@section('content')
    <stub-items-index inline-template>
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
                            <a href="\{{ route('stub-items.create') }}" class="btn btn-primary float-right">
                                \{{__('stub_items.create_stub_item')}} <span class="fal fa-fw fa-btn fa-plus"></span>
                            </a>
                        </div>
                        <stub-items-table url="\{{ route('stub-items.all') }}" :fields="tableFields">
                            {{#each fields}}
                            <template slot="{{this.name}}" slot-scope="props">
                                @\{{ props.row.item.{{this.name}} }}
                            </template>
                            {{/each}}
                            <template slot="actions" slot-scope="props">
                                <actions-cell :context="props"></actions-cell>
                            </template>
                            <template slot="row-details" slot-scope="props">
                                <b-card>
                                    <ul>
                                        <li v-for="(value, key) in props.row.item" :key="key">@\{{ key }}: @\{{ value}}</li>
                                    </ul>
                                </b-card>
                            </template>
                        </stub-items-table>
                    </div>
                </div>
            </div>
        </div>
    </stub-items-index>
@endsection
