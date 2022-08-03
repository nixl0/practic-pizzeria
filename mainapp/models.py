from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    desc = models.CharField(max_length=2000)
    weight = models.SmallIntegerField()
    price = models.SmallIntegerField()
    pic = models.CharField(max_length=1000)