<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStubItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stub_items', function (Blueprint $table) {
            $table->increments('id');

        {{#each fields}}
            $table->{{this.type}}('{{name}}'){{#if this.nullable}}->nullable(){{/if}}{{#if this.unsigned}}->unsigned(){{/if}};
        {{/each}}

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('stub_items');
    }
}
