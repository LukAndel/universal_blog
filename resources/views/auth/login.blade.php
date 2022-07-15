@extends('layouts/user-frame')
@section('head-specific')
  <title>Login</title>
@endsection
@section('content')

    <h1>Log in</h1>

    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('login') }}" method="post">

        @csrf

        <label for="">Email:</label><br>
        <input type="email" name="email" value="{{ old('email') }}"><br>
        <br>

        <label for="">Password:</label><br>
        <input type="password" name="password" value=""><br>
        <br>

        <button class="btn">Login</button>

    </form>
    <a class="btn" href="{{ route('password.request') }}">Reset password</a>
@endsection


