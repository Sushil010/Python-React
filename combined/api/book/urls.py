
from django.urls import path
from .views import get_books,post_books,updel

urlpatterns = [
    
    path('books/', get_books, name='get_books'),
    path('post_books/',post_books,name='post_books'),
    path('books/<int:pk>/', updel, name='updel')
    
]
