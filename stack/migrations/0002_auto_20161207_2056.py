# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-07 20:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stack', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic', models.CharField(max_length=25, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='question',
            name='categories',
            field=models.ManyToManyField(to='stack.Tag'),
        ),
    ]
