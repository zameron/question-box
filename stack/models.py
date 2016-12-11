from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

# Create your models here.


class Owner(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username


class Tag(models.Model):
    topic = models.CharField(max_length=25, unique=True)

    def __str__(self):
        return self.topic


class Question(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    votes = models.IntegerField(default=0)
    tags = models.ManyToManyField(Tag)
    created = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title


class Answer(models.Model):
    text = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    votes = models.IntegerField(default=0)
    created = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.text
