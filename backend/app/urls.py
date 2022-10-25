from django.urls import path

from .views import NewsCreateAPIView, NewsListAPIView, NewsDetailAPIView

app_name = "app"

urlpatterns = [
    path("news/create/", NewsCreateAPIView.as_view()),
    path("news/", NewsListAPIView.as_view()),
    path("news/<int:pk>", NewsDetailAPIView.as_view()),
]
