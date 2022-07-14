<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blog</title>
    <link rel="stylesheet" href="/css/blog-layout/basic.scss">
    <link rel="stylesheet" href="/css/blog-layout/blog.scss">
</head>
<body>
    @include('components/navigation')
    <div id="root"></div>
    <script src="{{mix('js/blog.js')}}"></script>
</body>
</html>