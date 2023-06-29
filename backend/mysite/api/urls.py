
from django.urls import path
from .views import BlogPostView

urlpatterns = [
    path('blog-post', BlogPostView.as_view())
]
