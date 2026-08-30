<?php

declare(strict_types=1);

namespace App;

enum Size: string
{
    case XS = 'XS';
    case S = 'S';
    case M = 'M';
    case L = 'L';
    case XL = 'XL';
    case XXL = 'XXL';

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
