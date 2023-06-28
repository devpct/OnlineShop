from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import json


# Tables
from .models import Customers
from .models import Products
from .models import Categorys
from .models import Orders
from .models import OrderDetails
from .models import Carts
from .models import Maneger
from .models import Admin


# Customer
@api_view(['GET'])
def dataCustomers(request):
    customersList = Customers.objects.all()

    data = []
    for customer in customersList:
        customerData = {
            'id': customer.customer_id,
            'nameLastname': customer.name_lastname,
            'username': customer.username,
            'password': customer.password,
            'email': customer.email,
            'phoneNumber': customer.phone_number,
            'city': customer.city,
            'address': customer.address,
            'nationalCode': customer.national_code,
            'registrationTime': customer.registration_time
        }
        data.append(customerData)

    return JsonResponse({'data': data})


@api_view(['POST'])
def addCustomer(request):
    data = json.loads(request.body)
    nameLastname = data['nameLastname']
    username = data['username']
    password = data['password']
    email = data['email']
    phoneNumber = data['phoneNumber']
    city = data['city']
    address = data['address']
    nationalCode = data['nationalCode']
    registrationTime = data['registrationTime']


    customer = Customers(
    username = nameLastname,
    name_lastname = username,
    password = password,
    email = email,
    phone_number = phoneNumber,
    city = city,
    address = address,
    national_code = nationalCode,
    registration_time = registrationTime
    )
    customer.save()

    return Response({'status': 'ok'})

@api_view(['DELETE'])
def deleteCustomer(request):
    data = json.loads(request.body)
    customerId = data['id']

    Customers.objects.filter(id=customerId).delete()

    return JsonResponse({'status': 'ok'})


@api_view(['PUT'])
def updateCustomer(request):
    data = json.loads(request.body)
    customerId = data['id']
    nameLastname = data['nameLastname']
    username = data['username']
    password = data['password']
    email = data['email']
    phoneNumber = data['phoneNumber']
    city = data['city']
    address = data['address'] 
    nationalCode = data['nationalCode']
    customer = Customers.objects.get(customer_id=customerId)
    customer.username = username
    customer.name_lastname = nameLastname
    customer.password = password
    customer.email = email
    customer.phone_number = phoneNumber
    customer.city = city
    customer.address = address
    customer.national_code = nationalCode
    customer.save()

    return JsonResponse({'status': 'ok'})


#Manager
@api_view(['GET'])
def dataManeger(request):
    manegerList = Maneger.objects.all()

    data = []
    for maneger in manegerList:
        manegerData = {
            'name': maneger.name,
            'username': maneger.username,
            'password' :maneger.password
        }
        data.append(manegerData)

    return JsonResponse({'data': data})


@api_view(['PUT'])
def updateManeger(request):
    data = json.loads(request.body)
    manegerId = data['id']
    name = data['name']
    username = data['username']
    password = data['password']

    maneger = Maneger.objects.get(id=manegerId)
    maneger.name = name
    maneger.username = username
    maneger.password = password

    maneger.save()

    return JsonResponse({'status': 'ok'})

# Product
@api_view(['GET'])
def dataProduct(request):
    productList = Products.objects.all()

    data = []
    for product in productList:
        productData = {
            'productId': product.id,
            'productName': product.product_name,
            'description': product.description,
            'price' :product.price,
            'image' : product.image,
            'categoryId' : product.category_id.to_dict()
        }
        data.append(productData)

    return JsonResponse({'data': data})


@api_view(['POST'])
def addProduct(request):
    data = json.loads(request.body)
    productName = data['productName']
    description = data['description']
    price = data['price']
    image = data['image']
    categoryId = data['categoryId']

    category = Categorys.objects.get(id=categoryId)

    product = Products(
    product_name = productName,
    description = description,
    price = price,
    image = image,
    category_id = category
    )
    product.save()

    return Response({'status': 'ok'})


@api_view(['DELETE'])
def deleteProduct(request):
    data = json.loads(request.body)
    productId = data['id']

    Products.objects.filter(id=productId).delete()

    return JsonResponse({'status': 'ok'})


@api_view(['PUT'])
def updateProduct(request):
    data = json.loads(request.body)
    productId = data['id']
    productName = data['productName']
    description = data['description']
    price = data['price']
    image = data['image']
    categoryId = data['categoryId']

    product = Products.objects.get(id=productId)
    product.product_name = productName
    product.description = description
    product.price = price
    product.image = image
    product.category_id = Categorys.objects.get(id=categoryId)

    product.save()

    return JsonResponse({'status': 'ok'})



# Category
@api_view(['GET'])
def dataCategory(request):
    categoryList = Categorys.objects.all()
    data = []
    for category in categoryList:
        categoryData = {
            'categoryId': category.id,
            'categoryName': category.category_name,
            'categoryDescription': category.category_description,
            'categoryImage' :category.category_image
        }
        data.append(categoryData)

    return JsonResponse({'data': data})


@api_view(['POST'])
def addCategory(request):
    data = json.loads(request.body)
    categoryName = data['categoryName']
    categoryDescription = data['categoryDescription']
    categoryImage = data['categoryImage']


    category = Categorys(
    category_name = categoryName,
    category_description = categoryDescription,
    category_image = categoryImage
    )
    category.save()

    return Response({'status': 'ok'})


@api_view(['DELETE'])
def deleteCategory(request):
    data = json.loads(request.body)
    categoryId = data['id']

    Categorys.objects.filter(id=categoryId).delete()

    return JsonResponse({'status': 'ok'})


@api_view(['PUT'])
def updateCategory(request):
    data = json.loads(request.body)
    categoryId = data['id']
    categoryName = data['categoryName']
    categoryDescription = data['categoryDescription']
    categoryImage = data['categoryImage']

    category = Categorys.objects.get(id=categoryId)
    category.category_name = categoryName
    category.category_description = categoryDescription
    category.category_image = categoryImage

    category.save()

    return JsonResponse({'status': 'ok'})



# Cart
@api_view(['GET'])
def dataCart(request):
    cartList = Carts.objects.all()

    data = []
    for cart in cartList:
        cartData = {
            'customerId': cart.customer_id_id,
            'productId': cart.product_id_id,
            'quantity': cart.quantity,
            'status': cart.status
        }
        data.append(cartData)

    return JsonResponse({'data': data})


@api_view(['POST'])
def addCart(request):
    data = json.loads(request.body)
    customerId = data['customerId']
    productId = data['productId']
    quantity = data['quantity']
    status = data['status']

    customer = Customers.objects.get(customer_id=customerId)
    product = Products.objects.get(id=productId)

    cart = Carts(
    customer_id = customer,
    product_id = product,
    quantity = quantity,
    status = status
    )
    cart.save()
    return Response({'status': 'ok'})

@api_view(['DELETE'])
def deleteCart(request):
    data = json.loads(request.body)
    cartId = data['id']

    Carts.objects.filter(id=cartId).delete()

    return JsonResponse({'status': 'ok'})


@api_view(['PUT'])
def updateCart(request):
    data = json.loads(request.body)
    cartId = data['id']
    userId = data['userId']
    productId = data['productId']
    quantity = data['quantity']
    status = data['status']

    cart = Carts.objects.get(id=cartId)
    cart.user_id = Users.objects.get(id=userId)
    cart.product_id = Products.objects.get(id=productId)
    cart.quantity = quantity
    cart.status = status

    cart.save()

    return JsonResponse({'status': 'ok'})



# Order
@api_view(['GET'])
def dataOrder(request):
    orderList = Orders.objects.all()

    data = []
    for order in orderList:
        orderData = {
            'userId': order.user_id_id,
            'orderData': order.order_data,
            'totalAmount': order.total_amount,
            'paymentType': order.payment_type,
            'status': order.status

        }
        data.append(orderData)

    return JsonResponse({'data': data})



@api_view(['POST'])
def addOrder(request):
    data = json.loads(request.body)
    userId = data['userId']
    orderData = data['orderData']
    totalAmount = data['totalAmount']
    paymentType = data['paymentType']
    status = data['status']

    order = Orders(
    user_id = Users.objects.get(id=userId),
    order_data = orderData,
    total_amount = totalAmount,
    payment_type = paymentType,
    status = status,
    )
    order.save()

    return Response({'status': 'ok'})

@api_view(['DELETE'])
def deleteOrder(request):
    data = json.loads(request.body)
    orderId = data['id']

    Orders.objects.filter(id=orderId).delete()

    return JsonResponse({'status': 'ok'})


@api_view(['PUT'])
def updateOrder(request):
    data = json.loads(request.body)
    orderId = data['id']
    userId = data['userId']
    orderData = data['orderData']
    totalAmount = data['totalAmount']
    paymentType = data['paymentType']
    status = data['status']

    order = Orders.objects.get(id=orderId)
    order.user_id = Users.objects.get(id=userId)
    order.order_data = orderData
    order.total_amount = totalAmount
    order.payment_type = paymentType
    order.status = status

    order.save()

    return JsonResponse({'status': 'ok'})



# orderDetails
@api_view(['GET'])
def dataOrderDetails(request):
    OrderDetailsList = OrderDetails.objects.all()

    data = []
    for orderDetail in OrderDetailsList:
        orderDetailsData = {
            'oredrId': orderDetail.oredr_id_id,
            'productId': orderDetail.product_id_id,
            'quantity': orderDetail.quantity,
            'itemNotes': orderDetail.item_notes,
            'itemPrice': orderDetail.item_price,
            'itemDiscount': orderDetail.item_discount,
            'itemTotal': orderDetail.item_total,
            'itemStatus': orderDetail.item_status
        }
        data.append(orderDetailsData)

    return JsonResponse({'data': data})


@api_view(['POST'])
def addOrderDetails(request):
    data = json.loads(request.body)
    oredrId = data['oredrId']
    productId = data['productId']
    quantity = data['quantity']
    itemNotes = data['itemNotes']
    itemPrice = data['itemPrice']
    itemDiscount = data['itemDiscount']
    itemTotal = data['itemTotal']
    itemStatus = data['itemStatus']

    orderdetail = OrderDetails(
    oredr_id = Orders.objects.get(id=oredrId),
    product_id = Products.objects.get(id=oredrId),
    quantity = quantity,
    item_notes = itemNotes,
    item_price = itemPrice,
    item_discount = itemDiscount,
    item_total = itemTotal,
    item_status = itemStatus
    )
    orderdetail.save()

    return Response({'status': 'ok'})

@api_view(['DELETE'])
def deleteOrderDetails(request):
    data = json.loads(request.body)
    orderDetailId = data['id']

    OrderDetails.objects.filter(id=orderDetailId).delete()

    return JsonResponse({'status': 'ok'})


@api_view(['PUT'])
def updateOrderDetails(request):
    data = json.loads(request.body)
    orderdetailId = data['id']
    oredrId = data['oredrId']
    productId = data['productId']
    quantity = data['quantity']
    itemNotes = data['itemNotes']
    itemPrice = data['itemPrice']
    itemDiscount = data['itemDiscount']
    itemTotal = data['itemTotal']
    itemStatus = data['itemStatus']

    orderdetail = OrderDetails.objects.get(id=orderdetailId)
    orderdetail.oredr_id = Orders.objects.get(id=oredrId) 
    orderdetail.product_id = Products.objects.get(id=productId)  
    orderdetail.quantity = quantity
    orderdetail.item_notes = itemNotes
    orderdetail.item_price = itemPrice
    orderdetail.item_discount = itemDiscount
    orderdetail.item_total = itemTotal
    orderdetail.item_status = itemStatus

    orderdetail.save()

    return JsonResponse({'status': 'ok'})


# Admin
@api_view(['GET'])
def dataAdmin(request):
    adminsList = Admin.objects.all()

    data = []
    for admin in adminsList:
        adminData = {
            'name': admin.name,
            'username': admin.username,
            'password': admin.password
        }
        data.append(adminData)

    return JsonResponse({'data': data})


@api_view(['POST'])
def addAdmin(request):
    data = json.loads(request.body)
    name = data['name']
    username = data['username']
    password = data['password']

    admin = Admin(
    name = name,
    username = username,
    password = password
    )
    admin.save()

    return Response({'status': 'ok'})

@api_view(['DELETE'])
def deleteAdmin(request):
    data = json.loads(request.body)
    adminId = data['id']

    Admin.objects.filter(id=adminId).delete()

    return JsonResponse({'status': 'ok'})


@api_view(['PUT'])
def updateAdmin(request):
    data = json.loads(request.body)
    adminId = data['id']
    name = data['name']
    username = data['username']
    password = data['password']

    admin = Admin.objects.get(id=adminId)
    admin.name = name
    admin.username = username
    admin.password = password

    admin.save()

    return JsonResponse({'status': 'ok'})