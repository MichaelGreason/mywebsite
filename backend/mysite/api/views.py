from django.shortcuts import render
from rest_framework import generics
from .serializers import BlogPostSerializer
from .models import BlogPost

# Create your views here.


class BlogPostView(generics.CreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
