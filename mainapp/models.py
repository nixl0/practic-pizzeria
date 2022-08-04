from unicodedata import category
from django.db import models

class Notice(models.Model):
    headline = models.CharField(max_length=2000)
    body = models.CharField(max_length=65000)
    pic = models.CharField(max_length=1000)
    action = models.CharField(max_length=500)

class ProductCategory(models.Model):
    title = models.CharField(max_length=1000)
    codename = models.CharField(max_length=1000, null=True)

class Product(models.Model):
    name = models.CharField(max_length=200)
    desc = models.CharField(max_length=2000)
    weight = models.SmallIntegerField()
    price = models.SmallIntegerField()
    pic = models.CharField(max_length=1000)
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, null=True)

class Discount(models.Model):
    headline = models.CharField(max_length=2000)
    body = models.CharField(max_length=65000)
    pic = models.CharField(max_length=1000)