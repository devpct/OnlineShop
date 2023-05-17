# Generated by Django 4.2 on 2023-05-17 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customers',
            fields=[
                ('customer_id', models.IntegerField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=255)),
                ('name_lastname', models.CharField(max_length=255)),
                ('password', models.IntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('national_code', models.CharField(max_length=255)),
                ('registration_time', models.DateTimeField()),
            ],
        ),
    ]
