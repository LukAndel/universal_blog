<link rel="stylesheet" href="/css/navigation.css">

<div class="nav-holder">
    <nav class="navigation">
        <a class="navigation__link" href="{{url('/')}}">HOME</a>
        
        <a class="navigation__link" href="{{url('/blog')}}">YOUR BLOG</a>
        @auth
            {{ Auth::user()->name }}
            <form action="{{ route('logout') }}" method="post">
                @csrf
                <button>Log out</button>
            </form>
            <a class="navigation__link" href="{{url('/page-creation')}}">PAGE CREATION</a>
            <a class="navigation__link" href="{{url('/article-creation')}}">ARTICLE CREATION</a>
        @else
            <a class="navigation__link" href="{{ route('login') }}">LOGIN</a>
        @endauth
        
        @guest

            <a class="navigation__link" href="{{ route('register') }}">REGISTER</a>

        @endguest

    </nav>
</div>





