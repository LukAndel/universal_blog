@extends('layouts.user-frame')

@section('head-specific')
<title>Upload</title>
@endsection

@section('content')
<h1 class="title">Picture Upload</h1>


<form method="post" enctype="multipart/form-data">
    @csrf
    <input type="text">
    <input type="file" name="uploaded_file">
    <button class="btn">Submit</button>
</form>



@endsection