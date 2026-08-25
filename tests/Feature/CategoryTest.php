<?php

use App\Models\Category;
use App\Models\Product;
use App\Models\User;

test('a category can be updated without changing its name', function () {
    $user = User::factory()->create();
    $category = Category::factory()->create(['name' => 'Books']);

    $response = $this->actingAs($user)->put(route('categories.update', $category), [
        'name' => 'Books',
        'description' => 'Updated description',
    ]);

    $response->assertRedirect(route('categories.index', absolute: false));
    $response->assertSessionHas('success', 'Category successfully.');
    $this->assertDatabaseHas('categories', [
        'id' => $category->id,
        'name' => 'Books',
        'description' => 'Updated description',
    ]);
});

test('deleting a category deletes its products', function () {
    $user = User::factory()->create();
    $category = Category::factory()->create();
    $product = Product::factory()->for($category)->create();

    $response = $this->actingAs($user)->delete(route('categories.destroy', $category));

    $response->assertRedirect(route('categories.index', absolute: false));
    $this->assertDatabaseMissing('categories', ['id' => $category->id]);
    $this->assertDatabaseMissing('products', ['id' => $product->id]);
});