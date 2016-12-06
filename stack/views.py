from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("hello boys")
# Create your views here.
