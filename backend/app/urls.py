from django.urls import path
from . import views

urlpatterns = [
    # Customer
    path('add/customer', views.addCustomer , name='add_customer'),
    path('data/customers', views.dataCustomers , name='data_customers'),
    path('delete/customer', views.deleteCustomer , name='delete_customer'),
    path('update/customer', views.updateCustomer , name='update_customer'),
    

    # Maneger
    path('data/maneger', views.dataManeger , name='data_maneger'),
    path('update/maneger', views.updateManeger , name='update_maneger'),


    # Product
    path('add/product', views.addProduct , name='add_product'),
    path('data/products', views.dataProduct , name='data_products'),
    path('delete/product', views.deleteProduct , name='delete_products'),
    path('update/product', views.updateProduct , name='update_products'),

    # Category
    path('add/category', views.addCategory , name='add_category'),
    path('data/categorys', views.dataCategory , name='data_categories'),
    path('delete/category', views.deleteCategory , name='delete_categories'),
    path('update/category', views.updateCategory , name='update_categories'),


    # Cart
    path('add/cart', views.addCart , name='add_cart'),
    path('data/carts', views.dataCart , name='data_carts'),
    path('delete/cart', views.deleteCart , name='delete_cart'),
    path('update/cart', views.updateCart , name='update_cart'),


    # Order
    path('add/order', views.addOrder , name='add_order'),
    path('data/orders', views.dataOrder , name='data_orders'),
    path('delete/order', views.deleteOrder , name='delete_order'),
    path('update/order', views.updateOrder , name='update_order'),

    # OrderDetails
    path('add/order_details', views.addOrderDetails , name='add_orderDetails'),
    path('data/order_details', views.dataOrderDetails , name='data_orderDetails'),
    path('delete/order_details', views.deleteOrderDetails , name='delete_orderDetails'),
    path('update/order_details', views.updateOrderDetails , name='update_orderDetails'),


    # Admin
    path('add/admin', views.addAdmin , name='add_admin'),
    path('data/admins', views.dataAdmin , name='data_admin'),
    path('delete/admin', views.deleteAdmin , name='delete_admin'),
    path('update/admin', views.updateAdmin , name='update_admin')
]