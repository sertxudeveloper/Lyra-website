<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

class DocsController extends Controller {

  private $DOCS_PATH;

  public function __construct() {
    $this->DOCS_PATH = public_path('/.vuepress/docs/');
  }

  public function asset(Request $request, $asset) {
    $FILE_PATH = $this->DOCS_PATH . "assets/$asset";

    if (!File::exists($FILE_PATH)) return redirect('/docs/404.html');

    $contents = File::get($FILE_PATH);
    $response = Response::make($contents);

    switch (pathinfo($asset, PATHINFO_EXTENSION)) {
      case 'css':
        $response->header('Content-Type', 'text/css');
        break;

      case 'js':
        $response->header('Content-Type', 'application/javascript');
        break;

      default:
        $response->header('Content-Type', File::mimeType($FILE_PATH));
        break;
    }

    return $response;
  }

  public function index(Request $request, $locale = false, $version = false, $path = false) {
    if ($locale == '404.html') {
      $contents = File::get($this->DOCS_PATH . "404.html");
      return Response::make($contents);
    }

    if (!$locale) return redirect('/docs/en/' . $this->getLastVersion($locale));
    if (!$version) return redirect('/docs/' . $this->getLastVersion($locale));
//    if (!$path) $path = 'welcome.html';
    if (!$path) return redirect("/docs/$locale/$version/welcome.html");

    $FILE_PATH = $this->DOCS_PATH . "$locale/$version/$path";

    if (!File::exists($FILE_PATH)) return redirect('/docs/404.html');

    $contents = File::get($FILE_PATH);
    return Response::make($contents);
  }

  private function getLastVersion($locale) {
    $dirs = File::directories($this->DOCS_PATH . "$locale");
    $dirs = array_filter($dirs, function ($dir) {
      return preg_match("/v[0-9]\.x$/", $dir);
    });

    $dirs = (collect($dirs))->sortDesc()->values();
    return str_replace($this->DOCS_PATH, '', $dirs->first());
  }
}
