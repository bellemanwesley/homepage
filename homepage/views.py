# coding=utf-8
from django.shortcuts import render
from django.http import HttpResponse

def home(request):
	return(render(request,'home.html',{}))

def post_data(request):
    return(render(request,'home.html',{}))
        

