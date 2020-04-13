# coding=utf-8
from django.shortcuts import render
from django.http import HttpResponseRedirect
import requests
import sys
sys.path.insert(0, '/home/ec2-user/homepage/homepage/localviews/')
import ukrainian

def home(request):
	return HttpResponseRedirect('/get_content/?cname=home')

def get_content(request):
	cname = request.GET.get('cname',False)
	cname = cname.replace("_","/")
        data = requests.get('https://raw.githubusercontent.com/bellemanwesley/homepage/master/s3_files/'+cname+'_content.html')
	with open('/home/ec2-user/homepage/logs/prints.txt','a') as f:
		f.write(ukrainian.translate('привіт'))
        return(render(request,'home.html',{'data':data.text}))

def ukrainian_books(request):
        data = requests.get('https://raw.githubusercontent.com/bellemanwesley/homepage/master/s3_files/ukrainian/books_content.html')
        return(render(request,'home.html',{'data':data.text}))

def reader(request):
	with open('/home/ec2-user/files/Відьмак. Меч призначення.xml','r') as f:
		file_data = f.read()
		data_start = file_data.find("<section>")
		file_data = file_data[data_start:len(file_data)]
        return(render(request,'reader.html',{'data':file_data}))
