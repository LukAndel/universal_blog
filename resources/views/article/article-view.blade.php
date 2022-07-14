@extends('layouts/blog')

@section('blog-content')
    

    {!!$article->title!!}
    {!!$article->text!!}

    <a href="/article-creation/{{$article->id}}"><button>to edit</button></a>

@endsection