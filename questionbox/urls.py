from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from stack import views
from django.contrib.auth import views as auth_views
import stack
# from stack.views import LogoutView


router = routers.DefaultRouter()
router.register(r'api/owners', views.OwnersViewSet),
router.register(r'api/questions', views.QuestionsViewSet),
router.register(r'api/answers', views.AnswersViewSet)
router.register(r'api/tag', views.TagsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^stack/', include('stack.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url('^login/$', auth_views.login, name='login'),
    url(r'^logout/$', stack.views.logout_view, name='logout'),
    url(r'^register/$', views.register, name="register"),
    url(r'^accounts/profile/$', stack.views.profile_view, name='user_profile')
]
