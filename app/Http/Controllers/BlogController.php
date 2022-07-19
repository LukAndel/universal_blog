<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class BlogController extends Controller
{
    public function display($name)
    {
        $user = User::where('name', $name)->first();

        return view('blog/main', compact('user'));
    }

}
