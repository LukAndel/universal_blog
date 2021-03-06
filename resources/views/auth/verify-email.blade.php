@extends('layouts/user-frame')
@section('head-specific')
  <title>Login</title>
@endsection
@section('content')

    <h1>Verify e-mail address</h1>
    <p>You must verify your email addres to access this page</p>

    <form method="POST" action="{{ route{'verification.send') }}}">
        @csrf
        <button type="submit" class="btn btn-primary">Resend verification email</button>
    </form>

    

    
    <a class="btn" href="{{ route('password.request') }}">Reset password</a>
@endsection

