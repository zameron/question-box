from django.shortcuts import render, HttpResponseRedirect
from rest_framework import viewsets
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import logout
# from django.views import View
from django.contrib.auth.models import User
from .models import Owner, Question, Answer, Tag
from .serializers import OwnerSerializer, QuestionSerializer, AnswerSerializer, TagSerializer, UserSerializer


def index(request):
    return render(request, 'base.html')
# Create your views here.

class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class OwnersViewSet(viewsets.ModelViewSet):

    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer


class QuestionsViewSet(viewsets.ModelViewSet):

    queryset = Question.objects.all().order_by('created')
    serializer_class = QuestionSerializer


class AnswersViewSet(viewsets.ModelViewSet):

    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer


class TagsViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


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



# class LogoutView(View):
#
#     template_name = 'registration/logged_out.html'
#
#     def get(self, request):
#         response = logout(request)
#
#         return render(response, self.logged_out.html)

def logout_view(request):
    logout(request)
    return render(request, 'logged_out.html')

def profile_view(request):
    return render(request, 'profile.html')
