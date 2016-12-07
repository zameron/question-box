from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
# from django.contrib.auth.models import BaseUserManager


# Create your models here.

class Owner(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username


class Question(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=255)
    user = models.ForeignKey(User)
    votes = models.IntegerField(default=0)
    categories = models.ManyToManyField('Tag')
    created = models.DateTimeField(default=datetime.now, blank=True)


class Answer(models.Model):
    text = models.CharField(max_length=255)
    user = models.ForeignKey(User)
    question = models.ForeignKey(Question)
    votes = models.IntegerField(default=0)
    created = models.DateTimeField(default=datetime.now, blank=True)


class Tag(models.Model):

    topic = models.CharField(max_length=25, unique=True)

    def __str__(self):
        return self.topic
