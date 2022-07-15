<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    Title: {!!$article->title!!}
    <br>
    Categories: @foreach ($categories as $item)
        {{$item['name']}} ||
    @endforeach
    <br>
    Text: {!!$article->text!!}

    <a href="/article-creation/{{$article->id}}"><button>to edit</button></a>
</body>
</html>