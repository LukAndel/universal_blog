@if (!$isNew)
<form action="/article-creation/{{$article->id}}" method="post">
  @method('put')
@else
<form action="{{ action('ArticleCreation@store')}}" method="post">
@endif
    @csrf
    <div id="options" class="options" style="margin-left: 10px; margin-bottom: 10px;">
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
      <button type="button" name="add" id="dynamic-add" class="btn">Add Category</button><br>

      <span><input type="text" name="categories[0]" value={{ !empty($categories) ? $categories[0]->name : '' }}><button type="button" class="btn" id="remove-input">Delete</button></span>

    
    
    
    @if (!empty($categories))
        
           @for ($i=1; $i < count($categories); $i++)
           
           <span><input type="text" name="categories[{{$i}}]" value="{{$categories[$i]->name}}"/><button type="button" class="btn" id="remove-input">Delete</button></span>
           
           @endfor
        
    @endif
    
    


    
<script defer type="text/javascript">
    let i = 0;
    $("#dynamic-add").click(function () {
        ++i;
        $("#options").append('<span><input type="text" name="categories[' + i +
            ']"/><button type="button" class="btn" id="remove-input">Delete</button></span>'
            );
    });
    $(document).on('click', '#remove-input', function () {
        $(this).parent('span').remove();
    });
</script>




  </div>
    <textarea id="textarea" name="textarea">{{ $article ? $article->text : '' }}</textarea>
    <div class="btn-container">
      <button class="btn">submit</button>

  </form>


  @if (!$isNew)
  <form action="" method="post">
    @method('delete')
    @csrf
      <button class="btn" formaction="{{ action('ArticleCreation@delete', [$article->id])}}">delete</button>
  </form>
  @endif
</div>
