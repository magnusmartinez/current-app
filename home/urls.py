from django.urls import path
from .views import index, blog



urlpatterns = [
    path('index/', index, name="inicio"),
    path('blog/', blog, name="blog"),
]