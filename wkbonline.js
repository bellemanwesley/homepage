function clear_active() {
  var all_navs = document.getElementsByName("navs");
  for(var i=0;i<all_navs.length;i++) {
    all_navs[i].className="nav-item";
  }
}

function home_content() {
  var home_html = `
    <br>
    <br>
    <div class="container-fluid">
    <div class="row justify-content-center">
    <div id="text_cover" class="bd-highlight p-5" style="background-color: #566573; opacity: 0;">
    <p id="welcome"><h1>Welcome to my personal website</h1></p>
    </div>
    <img id="archie" src="/images/Archie.jpeg">
    </div>
    <div class="row">
    <a target="_blank" href="https://www.linkedin.com/in/wesley-belleman-183406146/"><img id="linkedin" src="/images/make-site-like-linkedin.png"></img></a>
    <a target="_blank" href="https://bellemanwesley.medium.com/"><img id="medium" src="/images/Medium-Logo.png"></img></a>
    <a target="_blank" href="https://github.com/bellemanwesley"><img id="github" src="https://www.biocentric.nl/wp-content/uploads/2018/08/cec44feb-0b1b-4fe3-936d-67a51a1fe28e.png"></img></a>
    </div>
    </div>
  `;
  clear_active();
  document.getElementById("nav_home").className = "nav-item active";
  document.getElementById("page_content").innerHTML = home_html;
  fan_links(window.innerWidth/20);
  center_content(0);
}

function philanthropy_content() {
  var philanthropy_html = `
    <br>
    <br>
    <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div id="barchart_values" style="width: 900px; height: 300px;"></div>
      </div>
      <div class="col" style="background-color: #D5D8DC">
        <p><h1>About my philanthropy...</h1></p>
        <br>
        <p>
        Here you can see which organizations I have donated to and how much.
        I've become convinced by the arguments of <a href="https://www.williammacaskill.com/" target="_blank">
        Will MacAskill</a> not only on the importance of giving but also the importance of talking
        about our giving. I hope that he is right and me sharing information about my donations
        inspires my friends and other connections to also consider giving. I am by no means
        a very wealthy person in terms of a first world economy, but I recognize that my 
        wealth is very high compared to most citizens of the world. It is my moral responsibility
        to donate and encourage others to as well. If you have thought about giving before and still
        aren't, I highly recommend checking out Will's work!
        </p>
      </div>
    </div>
    </div>
  `;
  clear_active();
  document.getElementById("nav_philanthropy").className = "nav-item active";
  document.getElementById("page_content").innerHTML = philanthropy_html;
  philanthropy_chart();
}

async function center_content(step) {
  var text_cover = document.getElementById("text_cover");
  var archie = document.getElementById("archie");
  var m_4 = step % 400;
  var m_2 = step % 200;
  var m_1 = step % 100;
  if (m_2<100){
    var mult = m_1/100;
  } else {
    var mult = (100 - m_1)/100;
  }
  if (m_4 === 0) {
    archie.hidden = true;
    text_cover.hidden = false;
  }
  if (m_4 === 200) {
    archie.hidden = false;
    text_cover.hidden = true;
  }
  if (m_4<200) {
    text_cover.style = ("background-color: #566573; opacity: ").concat(mult.toString()).concat(";");
  } else {
    archie.style=("height:").concat(window.innerHeight/2.5).concat("; opacity:").concat(mult.toString()).concat(";");
  }
  setTimeout(() => {  center_content(step+1); }, 20);
}

async function fan_links(separation) {
  var s_img = "height:".concat(window.innerHeight/4).concat("px; width:").concat(window.innerWidth/4).concat("px; position:fixed;");
  s_img = s_img.concat("bottom:").concat(window.innerHeight/10).concat("px; left:");
  var linkedin = document.getElementById("linkedin");
  linkedin.style=s_img.concat(window.innerWidth/20).concat("px;");
  var medium = document.getElementById("medium");
  medium.style= s_img.concat(window.innerWidth/20+separation).concat("px;");
  var github = document.getElementById("github");
  github.style= s_img.concat(window.innerWidth/20+2*separation).concat("px;");
  
  if (separation<window.innerWidth/3.2){
    setTimeout(() => {  fan_links(separation+2); }, 5);
  }
}

function projects_content() {
  var projects_html = `
<br><br>
<div class="container d-flex justify-content-center">
  <br><br><br><br>
	<div class="row">
	    <div class="col-1"></div>
  		<div id="vitamova" class="col">
  		  <div class="row">
  		    <a href="https://vitamova.com/" target="_blank">
  		      <img name="head_img" src='/images/Flags-of-the-world.jpg'></img>
  		    </a>
  		  </div>
  		  <div class="row d-flex justify-content-center">
  		    <a href="https://vitamova.com/" target="_blank" style="text-decoration:none; color: #9B59B6;">
  		      <h2 class="display-3">&nbspVitamova</h2>
  		    </a>
  		  </div>
  		</div>
  
  		<div hidden id="cheetah" class="col">
  		  <div class="row">
  		    <a href="https://github.com/WKBSoft/codecheetah" target="_blank">
  		      <img name="head_img" src='/images/cheetah.jpg'></img>
  		    </a>
  		  </div>
  		  <div class="row d-flex justify-content-center">
  		    <a href="https://github.com/WKBSoft/codecheetah" target="_blank" style="text-decoration:none; color: #9B59B6;">
  		      <h2 class="display-3">&nbsp&nbsp&nbspCodeCheetah</h2>
  		    </a>
  		  </div>
  		</div>
  
  		<div hidden id="forwarder" class="col">
  		  <div class="row">
  		    <a href="http://aigames.wkbonline.net/" target="_blank">
  	  	    <img name="head_img" src='https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80'></img>
  	  	  </a>
        </div>
        <div class="row d-flex justify-content-center">
          <a href="http://aigames.wkbonline.net/" target="_blank" style="text-decoration:none; color: #9B59B6;">
  	  	    <h2 class="display-3">AI Games</h2>
  	  	  </a>
  	  	</div>
  		</div>
  		<div class="col-1"></div>
	</div>
</div>
`;
  clear_active();
  document.getElementById("nav_projects").className = "nav-item active";
  document.getElementById("page_content").innerHTML = projects_html;
  center_content_p(0, "vitamova");
  var head_imgs = document.getElementsByName("head_img");
  for (var i=0; i<head_imgs.length; i++) {
    head_imgs[i].style="height:".concat(window.innerHeight/1.7);
  }
}

async function center_content_p(step,active_id) {
  var active_element = document.getElementById(active_id);
  var m_2 = step % 200;
  var m_1 = step % 100;
  if (m_2<100) {
    var mult = m_1/100;
  } else {
    var mult = (100 - m_1)/100;
  }
  if (m_2 === 0 && step!=0) {
    active_element.hidden = true;
    if (active_id === "vitamova") {
      active_id = "cheetah";
    } else if (active_id === "cheetah") {
      active_id = "forwarder";
    } else if (active_id === "forwarder") {
      active_id = "vitamova";
    }
    active_element = document.getElementById(active_id);
    active_element.hidden = false;
  }
  active_element.style=("cursor: pointer; opacity:").concat(mult.toString()).concat(";");
  setTimeout(() => {  center_content_p(step+1,active_id); }, 20);
}

function philanthropy_chart() {
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Charity", "Donation", { role: "style" } ],
      ["Givewell", 250, "#b87333"],
      ["LSPC", 1750, "silver"],
      ["Global Health and Development Fund", 3500, "gold"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      title: "My 2021 Donations, in USD",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
}
}