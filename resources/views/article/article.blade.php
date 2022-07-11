<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Article creation</title>
    <!-- Insert the blade containing the TinyMCE configuration and source script -->
    <x-head.tinymce-config/>
  </head>
  <body>
    <h1>Article creation</h1>
    <!-- Insert the blade containing the TinyMCE placeholder HTML element -->
    <x-forms.tinymce-editor/>
  </body>
</html>