from rest_framework import serializers
from .models import Add


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model=Add
        fields=('id','code','host','guests_pause','skip_vote','created_at')
