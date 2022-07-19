<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Styleset;
use App\Models\User;
use App\Models\Section;
use Auth;



class PageController extends Controller
{
    public function create()
    {
        return view('page.page');
    }

    public function store(Request $request)
    {
        $styleset = new Styleset;
        $styleset->colorset_id = $request->colorset;
        $styleset->save();

        $user = Auth::user();
        $user->styleset_id = $styleset->id;
        $user->page_title = $request->pageTitle;
        $user->save();

        foreach ($request->sections as $key => $name) {
            $sections = new Section;
            $sections->user_id = $user->id;
            $sections->name = $name;
            $sections->save();
        }

        // $data = $request->all();

        return 'hello';
    }
}
