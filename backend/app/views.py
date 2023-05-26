from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import json

from .models import Customers


@api_view(['POST'])
def signup(request):
    data = json.loads(request.body)
    username = data['username']
    nameLastname = data['nameLastname']
    password = data['password']
    email = data['email']
    phoneNumber = data['phoneNumber']
    city = data['city']
    address = data['address']
    nationalCode = data['nationalCode']
    registrationTime = data['registrationTime']

    user = Users(customer_id = null, username = username, name_lastname = nameLastname, password = password , email = email , phone_number = phoneNumber , city = city , address = address , national_code = nationalCode , registration_time = registrationTime)
    user.save()

    return Response({'status': 'ok'})
