<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Blog</title>
    <link rel="stylesheet" href="/css/basic.css">
    <link rel="stylesheet" href="/css/blog-lukas.css">
</head>
<body>

    @include('components/navigation')

    <div class="main">
        @yield('blog-content')
    </div>
</body>
</html>