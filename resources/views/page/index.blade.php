@extends('layout.master')

@section('content')
  <div class="container-fluid">
    <div class="row landing-header">

      <div class="col-6 mt-5 mx-auto text-center">
        <h2 class="col-10 mx-auto">Boost your application and turn your ideas into reality</h2>
        <h5 class="col-9 mt-5 mx-auto">Lyra is an administration panel for applications created with Laravel</h5>
        <p class="mt-4 mx-auto col-md-8 col-12">
          With Lyra you can manage your project's database, this is achieved by
          defining the resources for each of your application's Eloquent models.
        </p>

        <div class="my-5 text-center">
          <a href="/lyra" class="btn py-2 px-3 btn-primary mx-2 text-light d-inline-flex align-items-center">
            <span>Try Demo</span>
          </a>

          <a href="/docs" class="btn py-2 px-3 btn-outline-primary mx-2 text-primary text-hover-light">
            <span>Read Documentation</span>
          </a>
        </div>
      </div>

      <div class="col-6 mt-4 lyra-image">
        <img src="/img/lyra_dashboard.png" alt="Lyra laptop" class="w-100 d-block mx-auto mt-5 shadow">
      </div>

    </div>
  </div>

  <div class="container-fluid bg-dark text-light">
    <div class="row justify-content-center py-4">
      <div class="col-3 px-5 py-5 text-center">
        <span class="display-4">
          <i class="fas fa-database"></i>
        </span>
        <h3>No database modified</h3>
        <p>Lyra can work without creating new tables using the basic mode</p>
      </div>

      <div class="col-3 px-5 py-5 text-center">
        <span class="display-4">
          <i class="fas fa-user-lock"></i>
        </span>
        <h3>RBAC functionality</h3>
        <p>Lyra provide its own RBAC functionality using the advanced mode</p>
      </div>

      <div class="col-3 px-5 py-5 text-center">
        <span class="display-4">
          <i class="fas fa-photo-video"></i>
        </span>
        <h3>Media Manager</h3>
        <p>Lyra implements a file browser to manage the uploaded files</p>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row my-5 py-4">
      <div class="col-7 mx-auto">
        <h2 class="mb-5 text-center display-4">Tutorial</h2>
        <iframe width="720" height="405" class="d-block mx-auto"
                src="https://www.youtube.com/embed/hUpc8ha1bIw?rel=0" frameborder="0"
                allow="autoplay; encrypted-media;" allowfullscreen></iframe>
      </div>
    </div>
  </div>

  <div class="container-fluid bg-dark text-light">
    <div class="row justify-content-center py-4">
      <div class="col-3 text-center">
        <span>Copyright &copy; 2019/{{ date('Y') }} <a href="//sertxudeveloper.com" class="text-light">Sertxu Developer</a></span>
        <br>
        <span>Released under the <a href="//opensource.org/licenses/MIT" class="text-light">MIT License</a></span>
      </div>
    </div>
  </div>

@endsection
