from django.shortcuts import render
from rest_framework import generics
from .serializers import BlogPostSerializer, MyImageSerializer
from .models import BlogPost, MyImage

# Create your views here.


class BlogPostView(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer


class MyImageView(generics.ListCreateAPIView):
    queryset = MyImage.objects.all()
    serializer_class = MyImageSerializer
