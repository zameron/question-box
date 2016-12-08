from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from stack import views
from django.contrib.auth import views as auth_views
import stack
# from stack.views import LogoutView


router = routers.DefaultRouter()
router.register(r'stack/owners', views.OwnersViewSet),
router.register(r'stack/questions', views.QuestionsViewSet),
router.register(r'stack/answers', views.AnswersViewSet)
router.register(r'stack/tag', views.TagsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^stack/', include('stack.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url('^login/$', auth_views.login, name='login'),
    # url('^logout/$', auth_views.logout, name='logout'),
    # url(r'^logout/$', LogoutView.as_view(), name='logout'),
    url(r'^logout/$', stack.views.logout_view, name='logout'),
    url(r'^register/$', views.register, name="register"),
    url(r'^accounts/profile/$', stack.views.profile_view, name='user_profile')
]
