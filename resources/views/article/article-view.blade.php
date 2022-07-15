@extends('layouts/blog')

@section('blog-content')
    

    Title: {!!$article->title!!}
    <br>
    Categories: @foreach ($categories as $item)
        {{$item['name']}} ||
    @endforeach
    <br>
    Text: {!!$article->text!!}

    @auth
        <a href="/article-creation/{{$article->id}}"><button>to edit</button></a>
    @endauth

@endsection
