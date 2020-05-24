<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="/img/icon.png" sizes="75x75">
  <title>Lyra Website</title>
  <meta name="description" content="Boost your application and turn your ideas into reality">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">

    <a class="navbar-brand" href="#">
      <img src="/img/logo.png" alt="Lyra logo" height="40px">
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="mx-2 nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="mx-2 nav-item">
          <a class="nav-link" href="/docs">Docs</a>
        </li>
        <li class="mx-2 nav-item">
          <a class="nav-link" href="/lyra">Demo</a>
        </li>
        <li class="mx-2 nav-item">
          <a class="nav-link" href="//github.com/sertxudeveloper/Lyra">GitHub</a>
        </li>
      </ul>
    </div>

  </div>
</nav>

@yield('content')

<script src="{{ mix('js/app.js') }}"></script>
</body>

</html>
