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

    user = Customers(customer_id = None , username = username, name_lastname = nameLastname, password = password , email = email , phone_number = phoneNumber , city = city , address = address , national_code = nationalCode , registration_time = registrationTime)
    user.save()

    return Response({'status': 'ok'})



@api_view(['GET'])
def customers(request):
    customersData = Customers.objects.all()

    data = []
    for customer in customersData:
        customer_data = {
            'id': customer.customer_id,
            'username': customer.username,
            'nameLastname': customer.name_lastname,
            'password': customer.password,
            'email': customer.email,
            'phoneNumber': customer.phone_number,
            'city': customer.city,
            'address': customer.address,
            'nationalCode': customer.national_code,
            'registrationTime': customer.registration_time,
        }
        data.append(customer_data)

    return JsonResponse({'data': data})
