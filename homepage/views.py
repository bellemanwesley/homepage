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

