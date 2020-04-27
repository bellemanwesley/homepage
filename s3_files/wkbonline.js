function home_content() {
  var home_html = `<div class="container-fluid">
	<div class="row">
  		<div class="col">
    		<h2>This is my dog</h2>
    		<p><img src="https://wkbonline-files.s3.us-east-2.amazonaws.com/Archie.jpeg" style="width:300px;"></img></p>
  		</div>
  
  		<div class="col">
    		<h1>Welcome</h1>
    		<p><h3>Welcome to my homepage. I've put together this website to collect various projects that I've worked on in a meaningful and organized manner. I hope you find what you are looking for.</h3></p>
  		</div>
  
  		<div class="col">
        	<h2>Find me on...</h2>
        	<p><a href="https://github.com/bellemanwesley" target="_blank"><img src="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg" style="width:300px;"></img></a></p>
        	<br>
        	<p><a href="https://www.linkedin.com/in/wesley-belleman-183406146/" target="_blank"><img src="https://mlqmtwka8c9g.i.optimole.com/gOh5_w-LkbUQGvD/w:366/h:153/q:85/dpr:2.6/https://www.competethemes.com/wp-content/uploads/2018/07/make-site-like-linkedin.png" style="width:300px;"></img></a>
  		</div>
	</div>
  </div>`;

document.getElementById("nav_home").className = "nav-item active";
document.getElementById("page_content").innerHtml = home_html;
}