@extends('templates/main')

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

    <form action="{{ route('register') }}" method="post">

        @csrf

        <label for="">Name:</label><br>
        <input type="text" name="name" value="{{ old('name') }}"><br>
        <br>

        <label for="">Email:</label><br>
        <input type="email" name="email" value="{{ old('email') }}"><br>
        <br>

        <label for="">Password:</label><br>
        <input type="password" name="password" value=""><br>
        <br>

        <label for="">Password confirmation:</label><br>
        <input type="password" name="password_confirmation" value=""><br>
        <br>

        <button>Register</button>

    </form>

@endsection