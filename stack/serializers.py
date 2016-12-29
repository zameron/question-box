from rest_framework import serializers
from .models import Owner, Question, Answer, Tag
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'owner')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class AnswerSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Answer
        fields = ('url', 'text', 'user', 'question', 'votes', 'created')


class QuestionSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)
    answers = AnswerSerializer(read_only=True, many=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Question
<<<<<<< HEAD
        fields = ('url', 'title', 'description', 'categories', 'user', 'votes', 'created', 'id')


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('url', 'text', 'user', 'question', 'votes', 'created')
        ordering = ['votes']
=======
        fields = ('url', 'title', 'description', 'user', 'votes', 'created', 'id', 'tags', 'answers')

>>>>>>> 85802a057d07de45f031082993383766bf6070eb

class OwnerSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(read_only=True, many=True)
    answers = AnswerSerializer(read_only=True, many=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Owner
        fields = ('user', 'score', 'user', 'questions', 'answers')
