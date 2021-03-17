from django.urls import path
from .views import index
from .views import blog

urlpatterns = [
    path('index/', index, name="inicio"),
    path('blog/', blog, name="blog"),

]