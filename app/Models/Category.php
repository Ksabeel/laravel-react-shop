<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\CategoryFactory;
use Illuminate\Database\Eloquent\Attributes\Appends;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Appends(['formatted_created_at', 'formatted_updated_at'])]
#[Fillable(['name', 'description'])]
class Category extends Model
{
    /** @use HasFactory<CategoryFactory> */
    use HasFactory;

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function getFormattedCreatedAtAttribute()
    {
        return $this->created_at?->format('d M Y');
    }

    public function getFormattedUpdatedAtAttribute()
    {
        return $this->updated_at?->format('d M Y');
    }
}
