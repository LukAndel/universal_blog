<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        // 'pivot',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function articles()
    {
        return $this->hasMany(Article::class);
    }
    public function pictures()
    {
        return $this->hasMany(Picture::class);
    }
    public function socials()
    {
        return $this->hasMany(Social::class);
    }
    public function styleset()
    {
        return $this->belongsTo(Styleset::class);
    }
    public function sections()
    {
        return $this->belongsToMany(Section::class);
    }

    public function getSectionNames()
    {
        return $this->sections()->get(['sections.name']);
    }

    public function roles()
    {
        return $this->belongsToMany('App\Models\Role');
    }
}
