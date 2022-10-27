from django.urls import path,re_path

from .views import CommentsCreateAPIView,CommentsListLimitAPIView,NewsListSearchAPIView, CommentsDetailAPIView, NewsListLimitAPIView, CommentsListAPIView, NewsCreateAPIView, NewsListAPIView, NewsDetailAPIView

app_name = "app"

urlpatterns = [
    path("news/create/", NewsCreateAPIView.as_view()),
    path("news/", NewsListAPIView.as_view()),
    path("news/<int:pk>", NewsDetailAPIView.as_view()),
    path("news/limit=<int:limit>", NewsListLimitAPIView.as_view()),
    path("news/<int:pk>/comments/", CommentsListAPIView.as_view()),
    path("news/comments/", CommentsListLimitAPIView.as_view()),
    path("news/comments/create/", CommentsCreateAPIView.as_view()),
    path('news/filter/', NewsListSearchAPIView.as_view()),
    
]
