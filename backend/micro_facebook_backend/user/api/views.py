from .serializer import UserSerializer
from rest_framework import viewsets
from user.models import User

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()