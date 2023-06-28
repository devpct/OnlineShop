from django.db import models

# customer
class Customers(models.Model):
    customer_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255)
    name_lastname = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    national_code = models.CharField(max_length=255)
    registration_time = models.CharField(max_length=255)

# maneger
class Maneger(models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

# product
class Products(models.Model):
    product_name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.IntegerField(max_length=255)
    image = models.CharField(max_length=255)
    category_id = models.ForeignKey('Categorys',on_delete=models.CASCADE)


# category
class Categorys(models.Model):
    category_name = models.CharField(max_length=255)
    category_description = models.CharField(max_length=255)
    category_image = models.TextField()
    def to_dict(self):
        return {
            'id': self.id,
            'category_name': self.category_name,
        }


# cart
class Carts (models.Model) :
    customer_id = models.ForeignKey('Customers',on_delete=models.CASCADE)
    product_id = models.ForeignKey('Products', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    status = models.CharField(max_length=255)


# order
class Orders (models.Model):
    customer_id = models.ForeignKey('Customers',on_delete=models.CASCADE)
    order_data = models.CharField(max_length=255)
    total_amount = models.CharField(max_length=255)
    payment_type = models.CharField(max_length=255)
    status = models.CharField(max_length=255)


# order_details
class OrderDetails (models.Model):
    oredr_id = models.ForeignKey('Orders',on_delete=models.CASCADE)
    product_id = models.ForeignKey('Products', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    item_notes = models.CharField(max_length=255)
    item_price = models.CharField(max_length=255)
    item_discount =models.CharField(max_length=255)
    item_total = models.CharField(max_length=255)
    item_status = models.CharField(max_length=255)


# admin
class Admin(models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
