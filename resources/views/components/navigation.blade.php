<link rel="stylesheet" href="/css/navigation.css">
<script src="js/nav.js" defer></script>

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
  <h1><a href="{{url('/upload')}}">Upload</a></h1>
  <h1><a href="{{url('/blog')}}">Your Page</a></h1>
  @endauth
  @auth
  <form action="{{ route('logout') }}" method="post">
      @csrf
      
      <button class="btn"> You can log out here {{ Auth::user()->name }}</button>
  </form>
@endauth

</nav>




