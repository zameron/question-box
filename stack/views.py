from django.shortcuts import render, HttpResponseRedirect
# from django.http import HttpResponse
from rest_framework import viewsets
from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth import login
from .models import Owner, Question, Answer
from .serializers import OwnerSerializer, QuestionSerializer, AnswerSerializer


def index(request):
    return render(request, 'stack.html')
# Create your views here.


class OwnersViewSet(viewsets.ModelViewSet):

    queryset = Owner.objects.all().order_by('user_id')
    serializer_class = OwnerSerializer


class QuestionsViewSet(viewsets.ModelViewSet):

    queryset = Question.objects.all().order_by('title')
    serializer_class = QuestionSerializer


class AnswersViewSet(viewsets.ModelViewSet):

    queryset = Answer.objects.all().order_by('text')
    serializer_class = AnswerSerializer


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
        return HttpResponseRedirect('/stack/')
    else:
        form = UserCreationForm()
        context = {'form': form}
    return render(request, 'registration/register.html', context)
