from .models import News
from .serializers import NewsSerializer
from rest_framework import permissions, viewsets, generics
from rest_framework.parsers import MultiPartParser, FormParser


class NewsCreateAPIView(viewsets.ModelViewSet):
    queryset = News.objects.order_by('-creation_date')
    serializer_class = NewsSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [
        permissions.AllowAny]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)
        

class NewsListAPIView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (permissions.AllowAny,)

class NewsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = NewsSerializer
    queryset = News.objects.all()