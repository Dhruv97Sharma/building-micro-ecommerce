from django.shortcuts import render
from rest_framework import viewsets
from .models import Product, ProductAttachment
from .serializers import ProductSerializer, ProductAttachmentSerializer

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductAttachmentViewSet(viewsets.ModelViewSet):
    queryset = ProductAttachment.objects.all()
    serializer_class = ProductAttachmentSerializer