from rest_framework import serializers
from .models import Owner, Question, Answer
from django.contrib.auth.models import User


class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'owner')

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('url', 'title', 'description', 'user', 'votes', 'created')


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('url', 'text', 'user', 'question', 'votes', 'created')
