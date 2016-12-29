from django.shortcuts import render, HttpResponseRedirect
from rest_framework import viewsets
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import logout
# from django.views import View
from django.contrib.auth.models import User
from .models import Owner, Question, Answer, Tag
from .serializers import OwnerSerializer, QuestionSerializer, AnswerSerializer, TagSerializer, UserSerializer




def index(request):
    question = Question.objects.all()
    return render(request, 'question_list.html', {'question': question})
<<<<<<< HEAD
# Create your views here.
=======
>>>>>>> 85802a057d07de45f031082993383766bf6070eb

class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class OwnersViewSet(viewsets.ModelViewSet):

    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer


class QuestionsViewSet(viewsets.ModelViewSet):

<<<<<<< HEAD
    queryset = Question.objects.all().order_by('-created')
=======
    queryset = Question.objects.all()
>>>>>>> 85802a057d07de45f031082993383766bf6070eb
    serializer_class = QuestionSerializer


class AnswersViewSet(viewsets.ModelViewSet):

    queryset = Answer.objects.all().order_by('-votes')
    serializer_class = AnswerSerializer


class TagsViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
        return HttpResponseRedirect('/stack/')
    else:
        form = UserCreationForm()
        context = {'form': form}
    return render(request, 'registration/register.html', context)

<<<<<<< HEAD
def question_view(request, var):
    question = Question.objects.get(pk=var)
    return render(request, 'question_view.html', {'question': question})
=======
>>>>>>> 85802a057d07de45f031082993383766bf6070eb

def logout_view(request):
    logout(request)
    return render(request, 'logged_out.html')


def profile_view(request):
    return render(request, 'profile.html')


def question_view(request, var):
    question = Question.objects.get(pk=var)
    return render(request, 'question_view.html', {'question': question})


def question_list_view(request):
    question = Question.objects.all()
    return render(request, 'question_list.html', {'question': question})
