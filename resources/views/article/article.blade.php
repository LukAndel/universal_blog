@extends('layouts.user-frame')

@section('head-specific')
  <title>Article creation</title>
  <x-head.tinymce-config/>
@endsection    
@section('content')        
  <h1>Article creation</h1>
  @include('components.forms.tinymce-editor', ['isNew' => $isNew, 'article' => $article ?? false, 'category' => $category ?? false ])

@endsection
