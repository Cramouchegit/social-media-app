<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required'
        ]);
        $post = Post::create(['user_id' => Auth::user()->id, 'content' => $request->content]);
        if($request->hasFile('images')) {
            foreach($request->file('images') as $image) {
                $path = $image->store('public/images');

                PostImage::create([
                    'post_id' => $post->id,
                    'image_url' => Storage::url($path)
                ]);
            }
        }

        return redirect()->route('home');
    }
}

