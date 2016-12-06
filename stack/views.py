from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Owner, Question, Answer
from .serializers import OwnerSerializer, QuestionSerializer, AnswerSerializer


def index(request):
    return HttpResponse("hello boys")
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
