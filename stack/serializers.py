from rest_framework import serializers
from .models import Owner, Question, Answer, Tag
from django.contrib.auth.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'owner')


class OwnerSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Owner
        fields = ('user', 'score')


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('url', 'title', 'description', 'categories', 'user', 'votes', 'created', 'id')


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('url', 'text', 'user', 'question', 'votes', 'created')
        ordering = ['votes']


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
