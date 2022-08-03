from django.contrib import admin
from django.urls import path
from mainapp import views

urlpatterns = [
    path('', views.index),
    path('menu/', views.menu),
    path('discount/', views.discount),
    path('coupon/', views.coupon),
    path('news/', views.news),

    path('admin/', admin.site.urls),
]
