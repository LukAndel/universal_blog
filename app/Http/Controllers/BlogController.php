<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class BlogController extends Controller
{
    public function display($userId)
    {
        $user = User::find($userId);

        return view('blog', compact('user'));
    }

}
