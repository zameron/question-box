from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
<<<<<<< HEAD
    url(r'^questions/([0-9]+)', views.question_view, name='question_view'),
=======
    url(r'^questions/([0-9]+)', views.question_view, name="question_view"),

>>>>>>> 85802a057d07de45f031082993383766bf6070eb
]
