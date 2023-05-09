<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use League\Glide\Responses\LaravelResponseFactory;
use League\Glide\ServerFactory;
use League\Glide\Signatures\SignatureException;
use League\Glide\Signatures\SignatureFactory;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ImageController extends Controller
{
    public function resize(Request $request, string $path): mixed
    {
        $server = ServerFactory::create([
            'source' => Storage::disk('public')->getDriver(),
            'cache' => Storage::disk('local')->getDriver(),
            'driver' => 'imagick',
            'response' => new LaravelResponseFactory($request),
            'defaults' => [
                'q' => 75,
                'fm' => 'webp',
                'fit' => 'crop',
            ],
        ]);

        try {
            SignatureFactory::create(config('glide.key'))->validateRequest($request->path(), $request->all());

            return $server->getImageResponse($path, $request->all());
        } catch (SignatureException) {
            throw new HttpException(403, 'Signature invalide');
        }
    }
}
