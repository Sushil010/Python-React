from django.db import models

# Create your models here.
class Shelf(models.Model):
    name=models.CharField(max_length=10)
    date=models.IntegerField()

    def __str__(self):
        return self.name