from django.http import FileResponse
from rest_framework import viewsets, renderers, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Purchase
from .serializers import PurchaseSerializer

# Create your views here.

class PurchaseViewSet(viewsets.ModelViewSet):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(methods=['get'], detail=False)
    def success(self, *args, **kwargs):
        response = Response({
            "msg": "Payment Successfully Processed",
        })
        return response
    
    @action(methods=['get'], detail=False)
    def cancel(self, *args, **kwargs):
        response = Response({
            "msg": "Payment Cancelled",
        })
        return response
    
    @action(methods=['get'], detail=False)
    def stopped(self, *args, **kwargs):
        response = Response({
            "msg": "Payment Stopped",
        })
        return response