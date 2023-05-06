from django.shortcuts import render
from django.http import FileResponse
from rest_framework import viewsets, renderers, permissions
from rest_framework.decorators import action
from .models import Product, ProductAttachment
from .serializers import ProductSerializer, ProductAttachmentSerializer

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class PassThroughRenderer(renderers.BaseRenderer):
    media_type = ""
    format = ""
    def render(self, data, accepted_media_type=None, renderer_context=None):
        return super().render(data, accepted_media_type, renderer_context)

class ProductAttachmentViewSet(viewsets.ModelViewSet):
    queryset = ProductAttachment.objects.all()
    serializer_class = ProductAttachmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(methods=['get'], detail=True, renderer_classes=(PassThroughRenderer,), )
    def download(self, *args, **kwargs):
        instance = self.get_object()
        file_handle = instance.file.open()

        response = FileResponse(file_handle, content_type='pdf')
        response['Content-Length'] = instance.file.size
        response['Content-Disposition'] = 'attachment; filename="%s"' % instance.file.name

        return response