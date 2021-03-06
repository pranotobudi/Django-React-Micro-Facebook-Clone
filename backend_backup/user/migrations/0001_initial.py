# Generated by Django 2.1.5 on 2019-02-08 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=120)),
                ('lastName', models.CharField(max_length=120)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=120)),
                ('gender', models.CharField(max_length=120)),
                ('birthday', models.CharField(max_length=120)),
            ],
        ),
    ]
