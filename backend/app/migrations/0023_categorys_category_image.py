# Generated by Django 4.2 on 2023-06-25 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0022_remove_categorys_category_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='categorys',
            name='category_image',
            field=models.CharField(default='default_image.jpg', max_length=19659),
        ),
    ]
