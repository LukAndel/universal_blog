<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Auth;
use Symfony\Component\Console\Input\Input;

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
        $categories = $article->categories()->get();

        $isNew = false;

        return view('article.article', compact('article', 'isNew', 'categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'text' => 'required',
            'title' => 'required',
            'categories[0]' => 'required'
        ]);


        $article = new Article;

        $user = Auth::user();
        

        $article->user_id = $user->id;
        $article->text = $request->input('textarea');
        $article->title = $request->input('title');
        $article->date = $request->input('date');
        
        $article->save();

        foreach ($request->categories as $key => $name) {


            if (Category::where('name', $name)->first()) {
                $category = Category::where('name', $name)->first();
                $article->categories()->attach($category->id);
            } else {
                $category = new Category;
                $category->name = $name;
                $category->save();
                // $category->articles()->attach($article->id);
                $article->categories()->attach($category->id);
            }
        };



        return redirect()->route('article-show', [$user->name, $article->id]);
    }

    public function edit(Request $request, $id)
    {
        // dd($request->categories);

        $user = Auth::user();
        $user = User::find(1);

        $article = Article::findOrFail($id);
        $article->user_id = $user->id;
        $article->text = $request->input('textarea');
        $article->title = $request->input('title');
        $article->date = $request->input('date');

        $article->save();

        foreach ($request->categories as $key => $name) {


            if (Category::where('name', $name)->first()) {
                // $category = Category::where('name', $name)->first();
                // $article->categories()->attach($category->id);
            } else {
                $category = new Category;
                $category->name = $name;
                $category->save();
                // $category->articles()->attach($article->id);
                $article->categories()->attach($category->id);
            }
        };


        return redirect()->route('article-show', [$user->name, $article->id]);
    }

    public function display($name, $id)
    {
        $user = User::where('name', $name)->first();
        $article = Article::where('id', $id)->first();
        $categories = $article->categories()->get();


        return view('article.article-view', compact('user', 'article', 'categories'));
    }

    public function delete($id)
    {
        $article = Article::findOrFail($id);

        $article->delete();

        $isNew = true;

        return redirect()->route('article-creation', ['isNew' => $isNew]);
    }
}
