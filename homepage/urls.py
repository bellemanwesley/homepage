"""homepage URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$',views.home,name="home"),
    url(r'^ukrainian/',views.ukrainian,name="ukrainian"),
    url(r'^workout/',views.workout,name="workout"),
    url(r'^progress/',views.ukrainian_progress,name="ukrainian_progress"),
    url(r'ukrainian_books/',views.ukrainian_books,name="ukrainian_books"),
    url(r'^accent/',views.ukrainian_accent,name="ukrainian_accent"),
    url(r'^reader/',views.reader,name="reader"),
]
