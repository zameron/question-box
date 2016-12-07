from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from stack import views


router = routers.DefaultRouter()
router.register(r'stack/owners', views.OwnersViewSet),
router.register(r'stack/questions', views.QuestionsViewSet),
router.register(r'stack/answers', views.AnswersViewSet)



urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^stack/', include('stack.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^register/$', views.register, name="register"),

]
