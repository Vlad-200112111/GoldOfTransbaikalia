from django.urls import path

from .views import CommentsCreateAPIView, CommentsDetailAPIView, CommentsListAPIView, NewsCreateAPIView, NewsListAPIView, NewsDetailAPIView

app_name = "app"

urlpatterns = [
    path("news/create/", NewsCreateAPIView.as_view()),
    path("news/", NewsListAPIView.as_view()),
    path("news/<int:pk>", NewsDetailAPIView.as_view()),
    path("news/<int:pk>/comments/", CommentsListAPIView.as_view()),
    path("news/comments/create/", CommentsCreateAPIView.as_view()),
]
