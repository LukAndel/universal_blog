<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\User;
use App\Models\Category;
use App\Models\Section;
use Auth;

class BlogController extends Controller
{
    public function getArticles($name)
    {
        $user = User::where("name", $name)->first();
        $articles = Article::where('user_id', $user->id)->get();

        return $articles;
    }

    public function getUser($name)
    {
        
        $user = User::where('name', $name)->with('styleset.colorset')->first();

        return $user;
    }

    public function getArticle($name, $id)
    {
        $user = User::where("name", $name)->first();
        $article = Article::where([['user_id', $user->id], ['id', $id]])->first();
        $categories = $article->categories;

        return $article;
    }

    public function getCategories($name)
    {
        $user = User::where("name", $name)->first();
        $categories = Article::where('user_id', $user->id)->with('categories')->get();
        // $categories = $articles->categories;

        return $categories;
    }
    // public function getStyleset()
    // {
    //     $id = Auth::id();
    //     $styleset = Styleset::where('user_id')
    // }

    public function getSections($name)
    {
        $user = User::where("name", $name)->first();
        $sections = $user->sections;

        return $sections;
    }

}
