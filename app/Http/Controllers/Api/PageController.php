<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Styleset;
use App\Models\User;
use App\Models\Section;
use App\Models\Colorset;
use Auth;
use App\Http\Resources\PageResource;


class PageController extends Controller
{
    public function data()
    {
        // dd(Auth::id());

        $id = Auth::id();
        $details = User::with('sections')->findOrFail($id);
        // dd($page);
        return new PageResource($details);
    }
    public function getSections()
    {
        $sections = Section::select('id', 'name')->get();
        return $sections;
    }
    public function getColorsets()
    {
        $colorsets = Colorset::get();
        return $colorsets;
    }
}
