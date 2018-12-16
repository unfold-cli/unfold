<?php

return [
    'stub_item' => 'Stub Item',
    'stub_items' => 'Stub Items',
    'create_stub_item' => 'Create Stub Item',
    'delete_stub_item' => 'Delete Stub Item',
    'edit_stub_item' => 'Edit Stub Item',
    'created_stub_item' => 'Created Stub Item',
    'deleted_stub_item' => 'Deleted Stub Item',
    'edited_stub_item' => 'Edited Stub Item',
    'back_to_stub_items' => 'Back to Stub Items',
    'are_you_sure_you_want_to_delete_stub_item' => 'Are you sure you want to delete this stub item?',
    'view_all_stub_items' => 'View All Stub Items',
    'attributes' => [
    {{#each fields}}
        '{{this.name}}' => '{{this.name}}',
    {{/each}}
    ],
];
