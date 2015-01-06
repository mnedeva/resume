var htmlName = "<h1>%data%</h1>";

var htmlRole = "<h2>%data%</h2>";

var htmlPicture = "<img src='%data%' class='profile-picture' alt='profile picture' />";

var htmlContact = "<div><span class='contact-label'>%label%:</span><span class='contact-data'>%data%</span></div>";

var htmlDescription = "<div class='description'>%data%</div>";

var htmlSkills = "<div class='skills'>%data%</div>";

var htmlEducation = "<div class='education-content'>"+
                    "<h4>%school%</h4>" +
                    "%location% <br />" +
                    "%year%<br />" + 
                    "%faculty% <br />" +
                    "</div>";
            
var htmlWork = "<div class='work-content'>"+
                    "<h4>%company%</h4>" +
                    "%year%<br />" + 
                    "%position% <br />" +
                    "</div>";            
            
var htmlProjects = "<div class='projects-content'>"+
                    "<h4>%name%</h4>" +
                    "%link% <br />" +
                    "%technologies%<br />" + 
                    "%description% <br />" +
                    "</div>";            
var htmlCertificates = "<div class='certificates-content'>"+
                    "<h4>%name%</h4>" +
                    "%year%<br />" + 
                    "%school% <br />" +
                    "</div>"; 

var htmlTabs = "<ul id='tabs'>"+
            "<li id='anchorEducation'><a href='#education'><h3>EDUCATION</h3></a></li>" + 
            "<li id='anchorWork'><a href='#work'><h3>WORKING EXPERIENCE</h3></a></li>" + 
            "<li id='anchorProjects'><a href='#projects'><h3>PROJECTS</h3></a></li>" + 
            "<li id='anchorCertificates'><a href='#certificates'><h3>CERTIFICATIONS</h3></a></li>" + 
            "</ul>" 