from .models import Comments, News, License, SubsoilUser
from .serializers import CommentsSerializer, NewsSerializer, LicensesSerializer, SubsoilUserSerializer
from rest_framework import permissions, viewsets, generics
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .permissions import IsAuthorOrIsAuthenticated


class NewsCreateAPIView(generics.CreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (permissions.AllowAny,)
    

# class NewsListAPIView(generics.ListAPIView):
#     queryset = News.objects.all()
#     serializer_class = NewsSerializer
#     permission_classes = (permissions.AllowAny,)

class NewsListLimitAPIView(generics.ListAPIView):
    serializer_class = NewsSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        queryset = News.objects.all()
        queryset = queryset.all()[:int(self.request.query_params.get('limit'))]
        return queryset

class NewsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = NewsSerializer
    queryset = News.objects.all()

class NewsListSearchAPIView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = NewsSerializer

    def get_queryset(self):
        queryset = News.objects.all()
        title = self.request.query_params.get('title') if self.request.query_params.get('title') is not None else ''
        caption = self.request.query_params.get('caption') if self.request.query_params.get('caption') is not None else ''
        creation_date = self.request.query_params.get('creation_date') if self.request.query_params.get('creation_date') is not None else ''
        publication = self.request.query_params.get('publication') if self.request.query_params.get('publication') is not None else ''
        queryset = queryset.filter(title__contains=title, caption__contains=caption, creation_date__contains=creation_date, publication__contains=publication)
        return queryset



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
        comments = Comments.objects.all()[:int(request.query_params.get('limit'))]
        results = self.paginate_queryset(comments)
        return self.get_paginated_response(CommentsSerializer(results, many=True).data) 

class CommentsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CommentsSerializer
    queryset = Comments.objects.all()


class LicensesListAPIView(generics.ListAPIView):
    serializer_class = LicensesSerializer
    permission_classes = (permissions.AllowAny,)
    queryset = License.objects.all()

    def get(self, request, *args, **kwargs):
        licenses = License.objects.all()
        results = self.paginate_queryset(licenses)
        return self.get_paginated_response(LicensesSerializer(results, many=True).data)
    
class LicensesDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = LicensesSerializer
    queryset = License.objects.all()
    

class SubsoilUserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = SubsoilUserSerializer
    queryset = SubsoilUser.objects.all()