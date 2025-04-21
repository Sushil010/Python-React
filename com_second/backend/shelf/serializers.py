from .models import Shelf
from rest_framework import serializers



class Shelfserializer(serializers.ModelSerializer):
    class Meta:
        model=Shelf
        fields='__all__'