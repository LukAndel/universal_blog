<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Auth;

class ArticleCreation extends Controller
{
    public function create()
    {
        $isNew = true;

        return view('article.article', ['isNew' => $isNew]);
    }

    public function show($articleId)
    {
        $article = Article::find($articleId);

        $isNew = false;

        return view('article.article', compact('article', 'isNew'));
    }

    public function store(Request $request)
    {
        $article = New Article;
        
        $user = Auth::user();
        $user = User::find(1);
        
        $article->user_id = $user->id;
        $article->text = $request->input('textarea');
        $article->title = $request->input('title');
        $article->date = $request->input('date');


        //if exists for category
        // $categoryList = Category::
        $category = New Category;
        $category->name = $request->input('category');
        $category->user_id = 1;   
        $categoryId = $category->save();

        $article->category_id = $categoryId;
        $article->save();

        return redirect()->route('article-show', [$user->name, $article->id, $category->id]);
    }

    public function edit(Request $request)
    {
        $user = Auth::user();
        $user = User::find(1);

        $article = Article::findOrFail($id);
        $article->text = $request->input('textarea');
        $article->title = $request->input('title');
        $article->date = $request->input('date');

        //if exists for category
        $category->name = $request->input('catergory');
        $categoryId = $category->save();

        $article->category_id = $categoryId;
        $article->save();

        return redirect()->route('article-show', [$user->name, $article->id, $category->id]);
    }

    public function display($name, $id)
    {
        $user = User::where('name', $name)->first();
        $article = Article::where('id', $id)->first();

        return view('article.article-view', compact('user', 'article'));
    }

    public function delete($id)
    {
        $article = Article::findOrFail($id);

        $article->delete();

        $isNew = true;

        return redirect()->route('article-creation', ['isNew' => $isNew]);
    }

}
