# Generated by Django 4.2 on 2023-06-25 01:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0018_alter_categorys_category_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categorys',
            name='category_image',
            field=models.TextField(),
        ),
    ]
