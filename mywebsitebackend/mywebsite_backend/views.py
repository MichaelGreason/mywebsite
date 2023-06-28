from django.shortcuts import render
from rest_framework import generics
from .models import BlogPost
from .serializers import BlogPostSerializer

# Create your views here.


class Blog(generics.ListAPIView):
    serializer_class = BlogPostSerializer
    blog = BlogPost.objects.all()
