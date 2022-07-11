{{-- @if ($article->id)
@else --}}
<form action="{{ action('App\Http\Controllers\ArticleCreation@store')}}" method="post">
{{-- @endif --}}
    @csrf
    <label>Title</label>
    <input type="text" name="title">
    <label>Date</label>
    <input type="text" name="date">
    <label>category</label>
    <input type="text" name="category">
    <textarea id="textarea" name="textarea"></textarea>
    <button>submit</button>
  </form>