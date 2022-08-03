from django.shortcuts import render

from mainapp.models import Product

def index(request):
    return render(request, 'index.html')

def discount(request):
    return render(request, 'discount.html')

def menu(request):
    products = Product.objects.all()
    return render(request, 'menu.html', {'products': products})
    # if not products:
    #     return render(request, 'menu.html', {'products': products})
    # else:
    #     return render(request, 'index.html')

def coupon(request):
    return render(request, 'coupon.html')

def news(request):
    return render(request, 'news.html')