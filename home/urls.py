from django.urls import path
from .views import index, blog
from usuario.views import async1


urlpatterns = [
    path('index/', index, name="inicio"),
    path('blog/', blog, name="blog"),
    path('async1/', async1, name="async1")

]