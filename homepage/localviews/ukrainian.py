import ssl
import urllib

def translate(word):
	ctx = ssl.create_default_context()
	ctx.check_hostname = False
	ctx.verify_mode = ssl.CERT_NONE
	url_word = urllib.parse.quote(word)
	response = urllib.request.urlopen('https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=en&dt=t&q='+url_word,context=ctx)
	html = str(response.read())
	translation_start = html.find("[\"") + 2
	translation_stop = html.find("\"",translation_start)
	return html[translation_start:translation_stop]
