@extends('layouts.user-frame')

@section('head-specific')
  <title>Page creation</title>
@endsection

@section('content')
<h1 class="title">Page Creation</h1>
        <div id="root"></div>
        <script src="{{mix('js/page.js')}}"></script>
@endsection