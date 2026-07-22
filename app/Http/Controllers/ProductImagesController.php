<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductImagesController extends Controller
{
    public function store(Request $request, Product $product): void
    {
        // dd($request->all());
        $request->validate([
            'images' => ['required', 'array'],
            'images.*' => ['image', 'max:5094'],
        ]);

        foreach ($request->file('images') as $image) {

            $path = $image->store('products', 'public');

            $product->images()->create([
                'product_id' => $product->id,
                'image_path' => $path,
            ]);
        }

    }
}
