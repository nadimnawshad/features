@extends('layouts.app')

@section('title', 'Home')

@section('content')
    <div class="container">
        <h2>Welcome to My Blog</h2>
        <p>This is a place where I share my thoughts and pictures.</p>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <img src="{{ asset('images/post1.jpg') }}" class="card-img-top" alt="Blog Post 1">
                    <div class="card-body">
                        <h5 class="card-title">Blog Post 1</h5>
                        <p class="card-text">A short description of Blog Post 1.</p>
                        <a href="{{ url('/post/1') }}" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <img src="{{ asset('images/post2.jpg') }}" class="card-img-top" alt="Blog Post 2">
                    <div class="card-body">
                        <h5 class="card-title">Blog Post 2</h5>
                        <p class="card-text">A short description of Blog Post 2.</p>
                        <a href="{{ url('/post/2') }}" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
