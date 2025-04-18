from django.db import models
import random
import string


def code_generator():
    length=6
    while True:
        code=''.join(random.choices(string.ascii_uppercase(k=length)))
         
        # Add.objects.filter(code=code) returns a list that is if there is existing other then 
        # count will increase else count 0 means there is not anything remaining.
        
        if Add.objects.filter(code=code).count()==0:
            break
    return code


# Create your models here.

class Add(models.Model):
    code=models.CharField(max_length=8,unique=True, default="")
    host=models.CharField(max_length=10,unique=True)
    guests_pause=models.BooleanField(null=False,default=False)
    skip_vote=models.IntegerField(default=1,null=False)
    created=models.DateTimeField(auto_now_add=True)