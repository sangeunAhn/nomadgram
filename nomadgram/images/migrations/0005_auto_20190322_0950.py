# Generated by Django 2.0.13 on 2019-03-22 00:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0004_auto_20190321_1151'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='image',
            options={'ordering': ['-created_at']},
        ),
    ]
