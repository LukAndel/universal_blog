<link rel="stylesheet" href="/css/navigation.css">

<div class="admin__nav-holder">
    <nav class="admin__navigation">
        <div class="logo"></div>
        <a class="admin__navigation__link" href="{{url('/')}}">HOME</a>
        @auth
            <a class="admin__navigation__link" href="{{url('/blog')}}">YOUR BLOG</a>
            <a class="admin__navigation__link" href="{{url('/page-creation')}}">PAGE CREATION</a>
            <a class="admin__navigation__link" href="{{url('/article-creation')}}">ARTICLE CREATION</a>
        @endauth

        @auth
            <form action="{{ route('logout') }}" method="post">
                @csrf
                
                <button class="btn" style="font-size: 10px"> {{ Auth::user()->name }} Log out</button>
            </form>
        @endauth
        <div class="logo" style="transform: scaleX(-1)"></div>
    </nav>
</div>





