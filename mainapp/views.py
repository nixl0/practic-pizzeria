from django.shortcuts import render

from mainapp.models import Notice, Product, ProductCategory

def index(request):
    try:
        notices = Notice.objects.all()
        return render(request, 'index.html', {'notices': notices})
    except:
        return render(request, 'error.html')

def discount(request):
    return render(request, 'discount.html')

def menu(request):
    try:
        products = Product.objects.all()
        categories = ProductCategory.objects.all()
        return render(request, 'menu.html', {'products': products, 'categories': categories})
    except:
        return render(request, 'error.html')

def coupon(request):
    return render(request, 'coupon.html')

def news(request):
    return render(request, 'news.html')

def error(request):
    return render(request, 'error.html')