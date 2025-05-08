from django.shortcuts import render
from django.core.paginator import Paginator
from .models import Product

# Create your views here.

def product_list(request):
    prodcuts = Product.objects.all()
    paginator = Paginator(prodcuts, 6)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'demo.html', {'page_obj': page_obj})
