from .serializer import UserSerializer
from rest_framework import viewsets
from users.models import CustomUser

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()