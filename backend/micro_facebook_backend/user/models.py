from django.db import models

# Create your models here.
class User(models.Model):
    firstName =  models.CharField(max_length=120)
    lastName =  models.CharField(max_length=120)
    email =  models.EmailField()
    password =  models.CharField(max_length=120)
    gender =  models.CharField(max_length=120)
    birthday =  models.CharField(max_length=120)
