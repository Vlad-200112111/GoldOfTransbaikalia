from .models import Comments, News
from .serializers import CommentsSerializer, NewsSerializer
from rest_framework import permissions, viewsets, generics
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .permissions import IsAuthorOrIsAuthenticated


class NewsCreateAPIView(generics.CreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (permissions.AllowAny,)
    

class NewsListAPIView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (permissions.AllowAny,)

class NewsListLimitAPIView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        news = News.objects.all()[:kwargs.get('limit')]
        results = self.paginate_queryset(news)
        return self.get_paginated_response(NewsSerializer(results, many=True).data) 

class NewsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = NewsSerializer
    queryset = News.objects.all()


class CommentsCreateAPIView(generics.CreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = (permissions.AllowAny,)
    

class CommentsListAPIView(generics.ListAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, *args, **kwargs):
        comments = Comments.objects.filter(new=kwargs.get('pk'))
        results = self.paginate_queryset(comments)
        return self.get_paginated_response(CommentsSerializer(results, many=True).data) 


class CommentsListLimitAPIView(generics.ListAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        comments = Comments.objects.all()[:kwargs.get('limit')]
        results = self.paginate_queryset(comments)
        return self.get_paginated_response(CommentsSerializer(results, many=True).data) 

class CommentsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CommentsSerializer
    queryset = Comments.objects.all()
    
    