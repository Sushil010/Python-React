from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Book
from .serializers import BookSerializer


# Create your views here.
def mainpage(request):
    return HttpResponse("Hello, world. You're at the book index.")

@api_view(['GET'])
def get_books(request):
    # the below line is to get all the books from the database
    books=Book.objects.all()

    # the below line will serialize the data and convert it to JSON format 
    serializer=BookSerializer(books, many=True)

    # the below line will return the data in JSON format with a 200 OK status code
    return Response(serializer.data, status=status.HTTP_200_OK)