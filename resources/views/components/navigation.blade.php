<link rel="stylesheet" href="/css/navigation.css">
<script src="js/nav.js" defer></script>
{{-- 
<div class="admin__nav-holder">
    <nav class="admin__navigation">
        <a class="admin__navigation__link" href="{{url('/')}}">HOME</a>
        @auth
            <a class="admin__navigation__link" href="{{url('/blog')}}">YOUR BLOG</a>
            <a class="admin__navigation__link" href="{{url('/page-creation')}}">PAGE CREATION</a>
            <a class="admin__navigation__link" href="{{url('/article-creation')}}">ARTICLE CREATION</a>
        @endauth

        @auth
            <form action="{{ route('logout') }}" method="post">
                @csrf
                
                <button class="btn"> {{ Auth::user()->name }} Log out</button>
            </form>
        @endauth
    </nav>
</div> --}}

<input type="checkbox" id="nav-control" class="nav-control" >
<label for="nav-control" class="toggle-button">
  <div class="wolverine">
    <div class="claws"></div> <span>menu</span>
  </div>
</label>
<nav class="navigation">

  <h1><a href="{{url('/')}}">Home</a></h1>
  @auth
  <h1><a href="{{url('/page-creation')}}">Page Creation</a></h1>
  <h1><a href="{{url('/article-creation')}}">New Article</a></h1>
  <h1><a href="{{url('/blog')}}">Your Page</a></h1>
  @endauth
  @auth
  <form action="{{ route('logout') }}" method="post">
      @csrf
      
      <button class="btn"> You can log out here {{ Auth::user()->name }}</button>
  </form>
@endauth

</nav>




