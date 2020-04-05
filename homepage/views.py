from django.shortcuts import render
import requests

def home(request):
	data = requests.get('https://raw.githubusercontent.com/bellemanwesley/homepage/master/s3_files/home_content.html')
	return(render(request,'home.html',{'data':data.text}))

def ukrainian(request):
        data = requests.get('https://raw.githubusercontent.com/bellemanwesley/homepage/master/s3_files/ukrainian_content.html')
	return(render(request,'home.html',{'data':data.text}))

def workout(request):
        data = requests.get('https://raw.githubusercontent.com/bellemanwesley/homepage/master/s3_files/workout_content.html')
        return(render(request,'home.html',{'data':data.text}))

