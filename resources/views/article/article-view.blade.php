@extends('layouts/blog')

@section('blog-content')
    

    <h1>{!!$article->title!!}</h1>
    <br>
    
    <div class="categories">
        <p>{!!$article->date!!}</p>
    @foreach ($categories as $item)
        {{$item['name']}} ||
    @endforeach
    </div>
    <br>
    <br>
    {!!$article->text!!}
    
    @auth
        <a href="/article-creation/{{$article->id}}"><button>to edit</button></a>
    @endauth

@endsection
