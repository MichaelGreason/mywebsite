
from django.urls import path
from .views import BlogPostView, MyImageView

urlpatterns = [
    path('blog-post', BlogPostView.as_view()),
    path('images/', MyImageView.as_view())
]
