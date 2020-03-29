from django.shortcuts import render
import requests

def home(request):
	data = requests.get('https://wkbonline-files.s3.us-east-2.amazonaws.com/home_content.html')
	return(render(request,'home.html',{'data':data.text}))

def ukrainian(request):
        data = requests.get('https://wkbonline-files.s3.us-east-2.amazonaws.com/ukrainian_content.html')
	return(render(request,'home.html',{'data':data.text}))

def workout(request):
        return(render(request,'home.html',{'data':'this is my workout page'}))

