from django.shortcuts import render
from django.http import HttpResponse
from .serializers import Shelfserializer
from .models import Shelf
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(['GET'])
def getshelf(request):
    shelf=Shelf.objects.all()
    serializer=Shelfserializer(shelf,many=True)
    return Response(serializer.data,status=status.HTTP_200_OK)

@api_view(['POST'])
def postshelf(request):
    data=request.data
    serializer=Shelfserializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['PUT','DELETE'])
def updation(request,pk):
    try:
        shelf=Shelf.objects.get(pk=pk)
    except Shelf.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method=="DELETE":
        shelf.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
   
    elif request.method=="PUT":
        data=request.data
        serializer=Shelfserializer(shelf,data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

