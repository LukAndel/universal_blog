<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Category;
use App\Models\User;

class ArticleCreation extends Controller
{
    public function create()
    {
        return view('article.article');
    }

    public function store(Request $request)
    {
        $article = new Article;
        $category = new Category;

        $article->user_id = 1;
        $article->text = $request->input('textarea');
        $article->title = $request->input('title');
        $article->date = $request->input('date');

        $category->name = $request->input('category');
        $category->user_id = 1;


        $categoryId = $category->save();
        $article->category_id = $categoryId;
        $article->save();

        return redirect(url('article/article'));
    }

    public function edit($id, Request $request)
    {
        $article = Article::findOrFail($id);
        $article->text = $request->input('textarea');
        $article->title = $request->input('title');
        $article->date = $request->input('date');
        $category->name = $request->input('catergory');


        $categoryId = $category->save();
        $article->category_id = $categoryId;
        $article->save();

        return redirect(url('article/article'));
    }

    public function display($name, $id)
    {
        $user = User::where('name', $name)->first();
        $article = Article::where('id', $id)->first();

        return view('article.article-view', compact('user', 'article'));
    }
}
