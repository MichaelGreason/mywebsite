from django.db import models

# Create your models here.


class BlogPost(models.Model):
    body = models.CharField(max_length=500, default='')
    created_at = models.DateField(auto_now_add=True)
