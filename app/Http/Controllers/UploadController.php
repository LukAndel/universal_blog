<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class UploadController extends Controller
{
    public function display()
    {
        return view('upload.upload');
    }

    public function store()
    {
        $user = Auth::user();


        return redirect()->route('upload', compact('user'));
    }
}
