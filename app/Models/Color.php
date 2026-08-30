<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\ColorFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable([
    'name',
    'hex',
])]
class Color extends Model
{
    /** @use HasFactory<ColorFactory> */
    use HasFactory;

    public function variants(): HasMany
    {
        return $this->hasMany(ProductVariant::class);
    }
}
