from django.urls import path
from .views import project_list, contact_create

urlpatterns = [
    path('projects/', project_list),
     path('contact/', contact_create),
]
