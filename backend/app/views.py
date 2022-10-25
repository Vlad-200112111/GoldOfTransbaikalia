from .models import News
from .serializers import NewsSerializer
from rest_framework import permissions, viewsets
from rest_framework.parsers import MultiPartParser, FormParser


class CreateNewAPIView(viewsets.ModelViewSet):
    queryset = News.objects.order_by('-creation_date')
    serializer_class = NewsSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)