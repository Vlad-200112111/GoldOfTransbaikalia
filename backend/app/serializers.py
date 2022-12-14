from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import News, Comments, License, SubsoilUser

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
    image_url = serializers.ImageField(required=False)
    creation_date = serializers.DateTimeField(read_only=True)

    class Meta:
        model = News
        fields = ['id', 'title', 'caption', 'image_url', 'creation_date', 'html']


class CommentsSerializer(serializers.ModelSerializer):
    content = serializers.CharField(required=True)
    new = serializers.SlugRelatedField(slug_field='id', queryset=News.objects)
    first_name = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)

    class Meta:
        model = Comments
        fields = ['id', 'new', 'content', 'first_name', 'email']


class LicensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = License
        fields = '__all__'

class SubsoilUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubsoilUser
        fields = "__all__"
