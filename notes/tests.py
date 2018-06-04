from django.utils.http import urlencode
from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework.authtoken.models import Token
from notes.models import Note
from notes import api

class NotesTests(APITestCase):
    
    def post_notes(self,name):
        pass