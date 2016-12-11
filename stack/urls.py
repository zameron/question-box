from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^questions/([0-9]+)', views.question_view, name='question_view'),
]
