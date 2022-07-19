<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\User;
use Auth;

class BlogController extends Controller
{
    public function getArticles()
    {
        $id = Auth::id();
        $articles = Article::where('user_id', $id)->get();

        return $articles;
    }

    public function getUser()
    {
        $id = Auth::id();
        $user = User::where('id',$id)->first();

        return $user;
    }
}
