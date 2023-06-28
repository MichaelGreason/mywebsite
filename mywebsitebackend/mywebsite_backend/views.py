from django.shortcuts import render
from .models import BlogPost

# Create your views here.


def blog():
    blog_post = BlogPost.objects.all()
    return render(request, 'home.html', {'blog_posts': blog_posts})