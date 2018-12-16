<?php

namespace App\Policies;

use App\StubItem;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StubItemPolicy
{
    use HandlesAuthorization;

    public function __construct()
    {

    }

    public function list()
    {
        return true;
    }

    public function create(User $user)
    {
        return true;
    }

    public function view(User $user, StubItem $stub_item)
    {
        return true;
    }

    public function edit(User $user, StubItem $stub_item)
    {
        return true;
    }

    public function update(User $user, StubItem $stub_item)
    {
        return true;
    }

    public function delete(User $user, StubItem $stub_item)
    {
        return true;
    }
}
