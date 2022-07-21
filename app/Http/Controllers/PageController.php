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
        $styleset->font_id = $request->font;
        $styleset->save();

        $user = Auth::user();
        $user->styleset_id = $styleset->id;
        $user->page_title = $request->pageTitle;
        $user->save();

        foreach ($user->sections as $section) {
            if (array_search($section->name, $request->sections) === false) {
                $user->sections()->detach($section->id);
            }
        }
        foreach ($request->sections as $reqSection) {

            $section = Section::where('name', $reqSection['name'])->first();
            if ($section) {
                $isMatch = $user->sections()->where('name', $section->name)->first();
                if (!$isMatch) {
                    $user->sections()->attach($section->id);
                }
            }
        }

        // $data = $request->all();

        return back()->with('message', 'Operation Successful !');
    }
}
