@extends('layouts/blog')

@section('blog-content')
    

    {!!$article->title!!}
    {!!$article->text!!}

    @auth
        <a href="/article-creation/{{$article->id}}"><button>to edit</button></a>
    @endauth

@endsection
