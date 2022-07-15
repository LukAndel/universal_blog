@extends('layouts.user-frame')

@section('head-specific')
  <title>Home</title>
@endsection

@section('content')
<link rel="stylesheet" href="css/welcome.css">
<div class="container right-panel-active">
	<!-- Sign Up -->
	<div class="container__form container--signup">
    @if (count($errors) > 0)
      <div class="alert alert-danger">
          <ul>
              @foreach ($errors->all() as $error)
                  <li>{{ $error }}</li>
              @endforeach
          </ul>
      </div>
    @endif
		<form action="{{ route('register') }}" class="form" id="form1" method="post">
      @csrf
			<h2 class="form__title">Sign Up</h2>
			<input type="text" placeholder="name" name="name" class="input" value="{{ old('name') }}" />
			<input type="email" placeholder="email" name="email" class="input" value="{{ old('name') }}" />
			<input type="password" placeholder="password" name="password" class="input" />
      		<input type="password" placeholder="password_confirmation" name="password_confirmation" class="input" />
			<button type="submit" class="btn-login">Sign Up</button>
		</form>
	</div>

	<!-- Sign In -->
	<div class="container__form container--signin">
    @if (count($errors) > 0)
      <div class="alert alert-danger">
          <ul>
              @foreach ($errors->all() as $error)
                  <li>{{ $error }}</li>
              @endforeach
          </ul>
      </div>
    @endif  
		<form action="{{ route('login') }}" method="post" class="form" id="form2">
      @csrf
			<h2 class="form__title">Sign In</h2>
			<input type="email" placeholder="email" name="email" class="input" />
			<input type="password" placeholder="password" name="password" class="input" />
			<a href="{{ route('password.request') }}" class="link">Forgot your password?</a>
			<button type="submit" class="btn-login">Sign In</button>
		</form>
	</div>

	<!-- Overlay -->
	<div class="container__overlay">
		<div class="overlay">
			<div class="overlay__panel overlay--left">
				<button class="btn-login" id="signIn">Sign In</button>
			</div>
			<div class="overlay__panel overlay--right">
				<button class="btn-login" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

<script src="js/welcome.js" defer></script>

@endsection

