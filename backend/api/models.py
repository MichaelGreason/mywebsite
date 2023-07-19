from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class CustomUser(AbstractUser):
    def __str__(self):
        return self.username


class BlogPost(models.Model):
    body = models.CharField(max_length=500, default='')
    author = models.CharField(max_length=50, default='')
    created_at = models.DateField(auto_now_add=True)
    time_created = models.TimeField(auto_now_add=True)
