<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Styleset extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->hasMany(User::class);
    }
    public function colorset()
    {
        return $this->belongsTo(Colorset::class);
    }
    public function font()
    {
        return $this->belongsTo(Font::class);
    }
}
