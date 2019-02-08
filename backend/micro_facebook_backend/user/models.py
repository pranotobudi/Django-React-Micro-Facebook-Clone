from django.db import models

# Create your models here.
class User(models.Model):
    firstname =  models.CharField(max_length=120)
    lastname =  models.CharField(max_length=120)
    email =  models.EmailField()
    password =  models.CharField(max_length=120)
    gender =  models.CharField(max_length=120)
    birthday =  models.CharField(max_length=120)
