$(document).ready(function(){
   $("#header").append(htmlRole.replace('%data%', biography.role));
   $("#header").prepend(htmlName.replace('%data%', biography.name));

   
   for (i in biography.contact){
       $("#contacts").append(htmlContact.replace('%label%', i).replace('%data%', biography.contact[i]));
   }
   
   $("#intro").append(htmlPicture.replace('%data%', biography.pictureURL));
   
   $("#intro").append(htmlDescription.replace('%data%', biography.description));
   if (biography.skills.length) {
       $("#intro").append("<h4>SKILLS</h4>")
        for(i in biography.skills) {
            $("#intro").append(htmlSkills.replace('%data%', biography.skills[i]));

        }
   }
   $("#education").append("<h3>EDUCATION</h3>");
   for (i in education){
       var oEducation = education[i];
       var $html = htmlEducation.replace('%school%', oEducation.school).replace('%year%', oEducation.year).replace('%location%', oEducation.location);
       if (oEducation.faculty){
           $html = $html.replace('%faculty%', oEducation.faculty);
       } else {
           $html = $html.replace('%faculty%', "");
       }
       $("#education").append($html);
   }
   $("#work").append("<h3>WORKING EXPERIANCE</h3>");
   work = work.reverse();
   for (i in work){
       var oWork = work[i];
       var $html = htmlWork.replace('%company%', oWork.company).replace('%year%', oWork.year).replace('%position%', oWork.position);
       $("#work").append($html);
   }   
   
   
   $("#contacts div").width((100/Object.keys(biography.contact).length)+"%");

  $("#projects").append("<h3>PROJECTS</h3>");
   for (i in projects){
       var oProject = projects[i];
       var $html = htmlProjects.replace('%name%', oProject.name).replace('%technologies%', oProject.technologies);
       if (oProject.link){
           $html = $html.replace('%link%', oProject.link);
       } else {
           $html = $html.replace('%link%', "");
       }
       if (oProject.description){
           $html = $html.replace('%description%', oProject.description);
       } else {
           $html = $html.replace('%description%', "");
       }       
       $("#projects").append($html);
   }

});