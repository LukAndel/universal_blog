<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\User;
use App\Models\Category;
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
        $user = User::where('id', $id)->with(['styleset.colorset', 'styleset.font'])->first();

        return $user;
    }

    public function getArticle($id)
    {
        $userId = Auth::id();
        $article = Article::where([['user_id', $userId], ['id', $id]])->first();
        $categories = $article->categories;

        return $article;
    }

    public function getCategories()
    {
        $id = Auth::id();
        $categories = Article::where('user_id', $id)->with('categories')->get();
        // $categories = $articles->categories;

        return $categories;
    }
    // public function getStyleset()
    // {
    //     $id = Auth::id();
    //     $styleset = Styleset::where('user_id')
    // }
}
