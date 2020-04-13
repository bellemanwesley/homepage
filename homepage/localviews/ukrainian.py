# coding=utf-8
import ssl
import urllib
import urlparse

def translate(word):
	ctx = ssl.create_default_context()
	ctx.check_hostname = False
	ctx.verify_mode = ssl.CERT_NONE
	response = urllib.urlopen('https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=en&dt=t&q='+word,context=ctx)
	html = str(response.read())
	translation_start = html.find("[\"") + 2
	translation_stop = html.find("\"",translation_start)
	return html[translation_start:translation_stop]

print(translate('привіт'))
