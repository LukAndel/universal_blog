<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/css/bootstrap-datepicker.css" rel="stylesheet">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/js/bootstrap-datepicker.js"></script>
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/admin-layout/admin.css">
    @yield('head-specific')
</head>
<body>
    <div class="main">
        <div class="nav-holder">
            <nav class="navigation">
                <a class="navigation__link" href="http://www.universal-blog.localhost">HOME</a>
                <a class="navigation__link" href="http://www.universal-blog.localhost/page-creation">PAGE CREATION</a>
                <a class="navigation__link" href="http://www.universal-blog.localhost/article-creation">ARTICLE CREATION</a>
                <a class="navigation__link" href="#">YOUR BLOG</a>
            </nav>
        </div>
    <div class="content" style="background-color: rgb(240, 235, 227); color: rgb(87, 111, 114);">
        <div>
            @yield('content')
        </div>
    </div>
</body>
</html>