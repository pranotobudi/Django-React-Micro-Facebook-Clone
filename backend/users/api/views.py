from .serializer import UserSerializer
from rest_framework import viewsets
from users.models import CustomUser
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.response import Response

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        # print(f"request: {request.data}")
        email = request.data['email']
        password =  request.data['password']
        print(f'email: {email}')
        print(f'password: {password}')
        user = authenticate(email=email, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'email': user.email,
                #'token': 'abc',
            })
        else:
            return Response({
                'token': '',
                'user_id': '',
                'email': '',
            })


class MyAuthenticateBackend:
    def authenticate(self, request, email=None, password=None):
        try:
            user = CustomUser.objects.get(email=email, password=password)
        except CustomUser.DoesNotExist:
            return None
        return user

    def get_user(self, user_id):
        try:
            return CustomUser.objects.get(pk=user_id)
        except CustomUser.DoesNotExist:
            return None
