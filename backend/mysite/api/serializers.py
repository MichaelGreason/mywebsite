from rest_framework import serializers
from .models import BlogPost, MyImage


class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = ('id', 'body', 'created_at', 'time_created')


class MyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyImage
        fields = '__all__'
