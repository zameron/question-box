# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-12 21:36
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stack', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='answer',
            name='userList',
        ),
    ]
