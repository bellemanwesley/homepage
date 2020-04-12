# coding=utf-8
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

def ukrainian_progress(request):
	data = requests.get('https://raw.githubusercontent.com/bellemanwesley/homepage/master/s3_files/ukrainian/progress_content.html')
        return(render(request,'home.html',{'data':data.text}))

def ukrainian_books(request):
        data = requests.get('https://raw.githubusercontent.com/bellemanwesley/homepage/master/s3_files/ukrainian/books_content.html')
        return(render(request,'home.html',{'data':data.text}))

def ukrainian_accent(request):
        data = requests.get('https://raw.githubusercontent.com/bellemanwesley/homepage/master/s3_files/ukrainian/accent_content.html')
        return(render(request,'home.html',{'data':data.text}))

def reader(request):
	with open('/home/ec2-user/Відьмак. Меч призначення.xml','r') as f:
		file_data = f.read()
        return(render(request,'reader.html',{'data':file_data}))
