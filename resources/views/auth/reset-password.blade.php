@extends('layouts/user-frame')
@section('head-specific')
  <title>Password Reset</title>
@endsection
@section('content')
    <h1>Register</h1>

    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    
    <form action="{{ url('reset-password') }}" method="post">

        @csrf

        <input type="hidden" name="token" value="{{ $request->token }}">

        <label for="">Email:</label><br>
        <input type="email" name="email" value="{{ $request->email }}"><br>
        <br>

        <label for="">Password:</label><br>
        <input type="password" name="password" value=""><br>
        <br>

        <label for="">Password confirmation:</label><br>
        <input type="password" name="password_confirmation" value=""><br>
        <br>

        <button class="btn">Reset Password</button>

    </form>
@endsection