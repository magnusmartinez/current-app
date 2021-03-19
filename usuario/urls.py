from django.urls import path
from usuario.views import register
from usuario.views import async1



urlpatterns = [
    path('register-user/',  register, name="register"),
    path('async1/', async1, name="async1")
]
