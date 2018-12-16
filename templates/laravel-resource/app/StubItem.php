<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StubItem extends Model
{
    // protected $table = '';
    // protected $primaryKey = 'id';
    // public $timestamps = false;
    // protected $guarded = ['id'];
    // protected $hidden = [];
    // protected $dates = [];
    // protected $casts = [];
    // protected $with = [];

    protected $fillable = [
    {{#each fields}}
        '{{this.name}}',
    {{/each}}
    ];

    protected $appends = [];

    /*
    |--------------------------------------------------------------------------
    | RELATIONS
    |--------------------------------------------------------------------------
    */
    // if user_id is a field, add that here
    // if team_id, add that here

    /*
    |--------------------------------------------------------------------------
    | SCOPES
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | ACCESORS
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | MUTATORS
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | FUNCTIONS
    |--------------------------------------------------------------------------
    */
    public function scopeTable($query, array $fields = ['id'])
    {
        $data = $query->select($fields);

        if (request()->filled('filter')) {
            $query = request('filter');
            $data->where(function ($q) use ($query, $fields) {
                foreach ($fields as $index => $field) {
                    $method = $index ? 'orWhere' : 'where';
                    $q->{$method}($field, 'LIKE', "%{$query}%");
                }
            });
        }

        if (request()->filled('orderBy')) {
            $data->orderBy(request('orderBy'), request('sortDesc') === 'true' ? 'DESC' : 'ASC');
        }

        return $data;
    }
}
