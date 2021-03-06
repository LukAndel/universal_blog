
@if (!$isNew)
<form id="form" action="/article-creation/{{$article->id}}" method="post">
  @method('put')
@else
<form id="form" action="{{ action('ArticleCreation@store')}}" method="post">
@endif
    @csrf
    <div id="options" class="options">
    <div class="container">
      
      <label>Date:</label>
      <input class="date form-control" type="text" style="width: 200px; margin-left: 40%" name="date" value={{ $article ? $article->date : '' }}>
    </div>
      <script type="text/javascript">
        $('.date').datepicker({  
          format: 'yyyy-mm-dd'
        });  
      </script> 
    <label>Category*</label><br>
      <button style="margin: 5px" type="button" name="add" id="dynamic-add" class="btn">Add Category</button><br>

      <span><input type="text" id="categories[0]" name="categories[0]" value={{ !empty($categories) ? $categories[0]->name : '' }}><button type="button" class="btn cat" id="remove-input">Delete</button></span>

    
    
    
    @if (!empty($categories))
        
           @for ($i=1; $i < count($categories); $i++)
     s      
           <span><input type="text" id="categories[{{$i}}]" name="categories[{{$i}}]" value="{{$categories[$i]->name}}"/><button type="button" class="btn cat" id="remove-input">Delete</button></span>
           
           @endfor
        
    @endif
    
    


    
<script defer type="text/javascript">
    let i = 100;
    $("#dynamic-add").click(function () {
        ++i;
        $("#options").append('<span><input type="text" name="categories[' + i +
            ']"/><button type="button" class="btn cat" id="remove-input">Delete</button></span>'
            );
    });
    $(document).on('click', '#remove-input', function () {
        $(this).parent('span').remove();
    });
</script>



    
  </div>
    <br><label>Title*</label><br>
    <textarea name="title" style="width: 90%; height: 30px">{{ $article ? $article->title : '' }}</textarea>
    <textarea id="textarea" name="textarea" style="height: 2000px">{{ $article ? $article->text : '' }}</textarea>
    <div class="btn-container">
      <button class="btn">submit</button>

  </form>

  @if (count($errors) > 0)
    <div class="w-4/8 m-auto text-center">
      @foreach ($errors->all() as $error)
        <li class="text-red-500 list-none">
          {{ $error }}
        </li>
      @endforeach
    </div>
  @endif


  @if (!$isNew)
  <form action="" method="post">
    @method('delete')
    @csrf
      <button class="btn" style="margin-top: 5px" formaction="{{ action('ArticleCreation@delete', [$article->id])}}">delete</button>
  </form>
  @endif
</div>
