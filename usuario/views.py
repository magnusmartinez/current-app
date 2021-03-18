from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.urls import reverse_lazy
from django.views.generic import CreateView

from usuario.form import user_form
from usuario.models import User

# Create your views here.

#class registrar_manager(CreateView):
#    model = User
#    template_name = 'index.html'
#    form_class = user_form
#    success_url = reverse_lazy('login')

def async1(request):
	if request.method == 'POST':
		form = user_form(request)
		if form.is_valid():
			form.save()

	else:
		form = user_form()

	return JsonResponse({
		"data": "coco"
})
