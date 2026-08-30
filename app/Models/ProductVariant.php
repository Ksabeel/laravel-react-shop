<?php

declare(strict_types=1);

namespace App\Models;

use App\Size;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(['product_id', 'sku', 'size', 'color_id', 'stock_quantity', 'additional_price'])]
class ProductVariant extends Model
{
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function color(): BelongsTo
    {
        return $this->belongsTo(Color::class);
    }

    protected function casts(): array
    {
        return [
            'size' => Size::class,
        ];
    }
}
