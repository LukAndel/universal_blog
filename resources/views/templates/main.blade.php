<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <script src="{{ asset('js/app.js')}}" defer></script>

        <title>Laravel</title>

        
    
    </head>
    <body class="antialiased">
        
        @auth

            {{ Auth::user()->name }}

            <form action="{{ route('logout') }}" method="post">
                @csrf
                <button>Log out</button>
            </form>

        @else

            <a href="{{ route('login') }}">Login</a>

        @endauth

        @guest

            <a href="{{ route('register') }}">Register here!</a>

        @endguest
  
        @can('admin')
            <a href="{{ route('admin.home') }}">Administration</a>
        @endcan

        <main>
            @yield('content')
        </main>
    </body>
</html>
