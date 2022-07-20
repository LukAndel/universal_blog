@extends('layouts/user-frame')
@section('head-specific')
  <title>Reset Password</title>
@endsection
@section('content')
    <h1>Reset Password</h1>

    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <ul>
            @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    @if(session('status'))
        <div class="alert alert-danger" role="alert">
            {{ session('success')}}
        </div>
    @endif

    <form action="{{ route('password.email') }}" method="post">

        @csrf

        <label for="">Email:</label><br>
        <input type="email" name="email"><br>
        <br>

        

        <button class="btn">Reset Password</button>

    </form>
@endsection

