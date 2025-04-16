from django.shortcuts import render
from .serializers import RoomSerializer
from .models import Add
from rest_framework import generics

# Create your views here.
class Roomview(generics.ListAPIView):
    queryset=Add.objects.all()
    serializer_class=RoomSerializer
