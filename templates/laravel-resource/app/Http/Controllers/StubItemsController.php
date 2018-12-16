<?php

namespace App\Http\Controllers;

use App\StubItem;

use App\Http\Controllers;
use App\Http\Resources\StubItemResource;
use App\Http\Requests\StubItem\StubItemDeleteRequest;
use App\Http\Requests\StubItem\StubItemStoreRequest;
use App\Http\Requests\StubItem\StubItemUpdateRequest;

class StubItemsController extends Controller
{
    /**
     * Show all StubItems
     *
     * @return \App\Http\Resources\StubItemResource
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function all()
    {
        $this->authorize('list', StubItem::class);

        return new StubItemResource(StubItem::table(['id', 'name'])->paginate(request('limit')));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index()
    {
        $this->authorize('list', StubItem::class);

        return view('stub-items.stub-items-index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create()
    {
        $this->authorize('create', StubItem::class);

        return view('stub-items.stub-items-create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StubItem\StubItemStoreRequest $request
     *
     * @return \App\Http\Resources\StubItemResource
     */
    public function store(StubItemStoreRequest $request)
    {
        $stub_item = StubItem::create($request->all());

        return new StubItemResource($stub_item);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\StubItem $stub_item
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(StubItem $stub_item)
    {
        $this->authorize('view', $stub_item);

        return view('stub-items.stub-items-show', [
            'stub_item' => $stub_item,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\StubItem $stub_item
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(StubItem $stub_item)
    {
        $this->authorize('edit', $stub_item);

        return view('stub-items.stub-items-edit', [
            'stub_item' => $stub_item,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\StubItem\StubItemUpdateRequest $request
     * @param \App\StubItem $stub_item
     *
     * @return \App\Http\Resources\StubItemResource
     */
    public function update(StubItemUpdateRequest $request, StubItem $stub_item)
    {
        $stub_item->update($request->all());

        return new StubItemResource($stub_item);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Http\Requests\StubItem\StubItemDeleteRequest $request
     * @param \App\StubItem $stub_item
     *
     * @return \App\Http\Resources\StubItemResource
     * @throws \Exception
     */
    public function destroy(StubItemDeleteRequest $request, StubItem $stub_item)
    {
        $stub_item->delete();

        return new StubItemResource($stub_item);
    }
}
