@if (!$isNew)
<form action="/article_creation/{{$article->id}}" method="post">
@else
<form action="{{ action('ArticleCreation@store')}}" method="post">
@endif
    @csrf
    <div class="options" style="margin-left: 10px; margin-bottom: 10px;">
    <label>Title*</label><br>
    <input type="text" name="title" value={{ $article ? $article->title : '' }}>
    <div class="container" style="width: 200px; margin:0; padding:0;">
      <label>Date:</label>
      <input class="date form-control" type="text" value={{ $article ? $article->date : '' }}>
    </div>

    <script type="text/javascript">
      $('.date').datepicker({  
         format: 'yyyy-mm-dd'
       });  
  </script> 
    <label>Category*</label><br>
    <input type="text" name="category" value={{ $category ? $category->name : '' }}>
  </div>
    <textarea id="textarea" name="textarea">{{ $article ? $article->text : '' }}</textarea>
    <div class="btn-container">
      <button class="btn">submit</button>
  @if (!$isNew)
  <form action="" method="post">
    @method('delete')
    @csrf
      <button class="btn" formaction="{{ action('ArticleCreation@delete', [$article->id])}}">delete</button>
  </form>
  @endif
    </div>
  </form>