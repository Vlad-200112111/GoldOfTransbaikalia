from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import News, Comments

User = get_user_model()

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ("__all__")

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ("id", "email", "username", "first_name", "last_name", "password")


class NewsSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    creator_id = serializers.ReadOnlyField(source='creator.id')
    image_url = serializers.ImageField(required=False)
    # creator = UserSerializer(many=True, read_only=True)
    creation_date = serializers.DateTimeField(read_only=True)

    class Meta:
        model = News
        fields = ['id', 'creator', 'creator_id', 'title', 'caption', 'image_url', 'creation_date']


class CommentsSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    creator_id = serializers.ReadOnlyField(source='creator.id')
    content = serializers.CharField(required=True)
    new = NewsSerializer(many=True, read_only=True)

    class Meta:
        model = Comments
        fields = ['__all__']
