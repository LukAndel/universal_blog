@extends('layouts/user-frame')

@section('head-specific')
  <title>Article creation</title>
  <x-head.tinymce-config/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/css/bootstrap-datepicker.css" rel="stylesheet">
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/js/bootstrap-datepicker.js"></script>
@endsection    
@section('content')        
  <h1 class="title">Article Creation</h1>
  @include('components.forms.tinymce-editor', ['isNew' => $isNew, 'article' => $article ?? false, 'category' => $category ?? false ])

@endsection
