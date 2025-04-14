from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h4>Hello, world. You're at the first index.</h4>")
