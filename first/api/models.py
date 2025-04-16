from django.db import models

# Create your models here.
class Add(models.Model):
    code=models.CharField(max_length=8,unique=True, default="")
    host=models.CharField(max_length=10,unique=True)
    guets_pause=models.BooleanField(null=False,default=False)
    skip_vote=models.IntegerField(default=1,null=False)
    created=models.DateTimeField(auto_now_add=True)