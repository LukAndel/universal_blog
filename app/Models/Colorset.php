<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colorset extends Model
{
    use HasFactory;
    
    
    public function stylesets()
    {
        return $this->hasMany(Styleset::class);
    }
}
