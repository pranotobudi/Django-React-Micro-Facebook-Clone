from django.db import models

# Create your models here.
class User(models.Model):
    firstname =  models.CharField(max_length=120)
    lastname =  models.CharField(max_length=120)
    email =  models.CharField(max_length=120)
    password =  models.CharField(max_length=120)
    gender =  models.CharField(max_length=120)
    birthday =  models.CharField(max_length=120)

    def __str__(self):
        return (f"{self.id} {self.firstname} {self.lastname} {self.email}")
