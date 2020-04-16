# coding=utf-8
from django.shortcuts import render
from django.http import HttpResponseRedirect
import requests
import sys
import urllib
sys.path.insert(0, '/home/ec2-user/homepage/homepage/localviews/')
import ukrainian

def home(request):
	return HttpResponseRedirect('/get_content/?cname=home')

def get_content(request):
	cname = request.GET.get('cname',False)
	cname = cname.replace("_","/")
        data = requests.get('https://raw.githubusercontent.com/bellemanwesley/homepage/master/s3_files/'+cname+'_content.html')
        return(render(request,'home.html',{'data':data.text}))

def ukrainian_books(request):
        data = requests.get('https://raw.githubusercontent.com/bellemanwesley/homepage/master/s3_files/ukrainian/books_content.html')
        return(render(request,'home.html',{'data':data.text}))

def reader(request):
	with open('/home/ec2-user/files/Відьмак. Меч призначення.xml','r') as f:
		file_data = f.read()
	book_pages = ukrainian.return_pages(file_data,200)
	book_page = int(request.GET.get('page','0'))
	translate_key = urllib.unquote(request.GET.get('translate',"")).encode('utf-8')
	with open('/home/ec2-user/files/logs/prints.txt','a') as f:
		f.write(translate_key)
	if translate_key != '':
		translation = ukrainian.translate(translate_key)
	else:
		translation = ''
	progress = int(100*float(book_page)/len(book_pages))
        return(render(request,'reader.html',{'data':book_pages[book_page],'translation':translation,'progress':progress}))

def post_data(request):
	password = request.POST.get('password','')
	with open('/home/ec2-user/keys/book_key.txt') as f:
		correct = f.readlines()[0]
	if password == correct:
		return HttpResponseRedirect('/ukrainian_books/')
