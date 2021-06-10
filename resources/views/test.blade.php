<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<input type="hidden" id="test" value="{{$data}}">
</body>
<script type="module" >
    //var app = @json($data);
    //export var data = @json($data, JSON_PRETTY_PRINT);
    //export{data};
</script>
<script type="module" src="{{ asset('assets/js/test.js') }}"></script>
</html>

