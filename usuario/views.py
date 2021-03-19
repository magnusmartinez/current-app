from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.urls import reverse_lazy
from django.views.generic import CreateView

from usuario.form import user_form
from usuario.models import User

# Create your views here.


def register(request):
	if request.method == 'POST':
		form = user_form(request)
		if form.is_valid():
			form.save()
	else:
		form = user_form()

	return render(request, "index.html", {'form': form})


def async1(request):
	errors = ""
	if request.method == 'POST':
		form = user_form({
			'username': request.POST['username'],
            'first_name': request.POST['first_name'],
            'last_name': request.POST['last_name'],
            'email': request.POST['email'],
			'password': request.POST['password']
		})
		if form.is_valid():
			form.save()
		else:
			errors = form.errors.as_json()

	else:
		form = user_form()
		errors = form.errors.as_json()

	return JsonResponse({"errors": errors})


