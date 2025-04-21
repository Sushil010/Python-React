from django.urls import path
from . import views


urlpatterns = [
   path('getshelf/', views.getshelf, name='getshelf'),
   path('postshelf/', views.postshelf, name='postshelf'),
   path('getshelf/<int:pk>/',views.updation,name='updation')
]