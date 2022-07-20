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

        foreach ($user->sections as $section) {
            if (array_search($section->name, $request->sections) === false) {
                $user->sections()->detach($section->id);
            }
        }
        foreach ($request->sections as $name) {
            if (Section::where('name', $name['name'])->first()) {
                if (!($user->sections()->where('name', $name['name'])->exists())) {
                    $section = Section::where('name', $name['name'])->first();
                    $user->sections()->attach($section->id);
                }
            }

            // $data = $request->all();

            return $request->all();
        }
    }
}
