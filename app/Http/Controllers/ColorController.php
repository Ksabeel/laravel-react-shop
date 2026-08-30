<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Color;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Colors/Index', [
            'colors' => Color::latest()->paginate(5),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Colors/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255', Rule::unique('colors', 'name')],
            'hex' => ['required', 'string', 'max:7', Rule::unique('colors', 'hex')],
        ]);

        Color::create($request->only(['name', 'hex']));

        return redirect()->route('colors.index')->with('success', 'Color created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Color $color)
    {
        return Inertia::render('Colors/Show', [
            'color' => $color,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Color $color)
    {
        return Inertia::render('Colors/Edit', [
            'color' => $color,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Color $color)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255', Rule::unique('colors', 'name')],
            'hex' => ['required', 'string', 'max:7', Rule::unique('colors', 'hex')],
        ]);

        $color->update($request->only(['name', 'hex']));

        return redirect()->route('colors.index')->with('success', 'Color updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Color $color)
    {
        $color->delete();

        return redirect()->route('colors.index')->with('success', 'Color deleted successfully.');
    }
}
