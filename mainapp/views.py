from django.shortcuts import render

from mainapp.models import Discount, Notice, Product, ProductCategory

def index(request):
    try:
        notices = Notice.objects.all()
        return render(request, 'index.html', {'notices': notices})
    except:
        return render(request, 'error.html')

def discount(request):
    try:
        discounts = Discount.objects.all()
        return render(request, 'discount.html', {'discounts': discounts})
    except:
        return render(request, 'error.html')

def menu(request):
    try:
        products = Product.objects.all()
        categories = ProductCategory.objects.all()
        return render(request, 'menu.html', {'products': products, 'categories': categories})
    except:
        return render(request, 'error.html')

def coupon(request):
    try:
        discounts = Discount.objects.all()
        return render(request, 'coupon.html', {'discounts': discounts})
    except:
        return render(request, 'error.html')

def news(request):
    try:
        discounts = Discount.objects.all()
        return render(request, 'news.html', {'discounts': discounts})
    except:
        return render(request, 'error.html')

def error(request):
    return render(request, 'error.html')