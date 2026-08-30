<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Color;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Size;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProductVariantsController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create(Product $product)
    {
        return Inertia::render('ProductVariants/Create', [
            'product' => $product,
            'sizes' => Size::cases(),
            'colors' => Color::select('id', 'name')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Product $product): RedirectResponse
    {
        $validated = $request->validate([
            'size' => [
                'required',
                Rule::enum(Size::class),
                Rule::unique('product_variants')->where(
                    fn ($query) => $query
                        ->where('product_id', $product->id)
                        ->where('color_id', $request->input('color_id')),
                ),
            ],
            'color_id' => ['required', 'exists:colors,id'],
            'stock_quantity' => ['required', 'integer', 'min:0'],
            'additional_price' => ['required', 'numeric', 'min:0'],
        ]);

        ProductVariant::create([
            'product_id' => $product->id,
            'sku' => 'SKU-'.Str::upper((string) Str::ulid()),
            ...$validated,
        ]);

        return redirect()->route('products.show', $product)->with('success', 'Variant successfully added.');
    }
}
