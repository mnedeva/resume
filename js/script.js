function displayEducation(){
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
}

function displayWork(){
   work = work.reverse();
   for (i in work){
       var oWork = work[i];
       var $html = htmlWork.replace('%company%', oWork.company).replace('%year%', oWork.year).replace('%position%', oWork.position);
       $("#work").append($html);
   }       
}

function displayProjects(){
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
}

function displayCertificates(){
    for (i in certificates){
       var oCert = certificates[i];
       var $html = htmlCertificates.replace('%school%', oCert.school).replace('%year%', oCert.year).replace('%name%', oCert.name);
       $("#certificates").append($html);
   }         
}

$(document).ready(function(){
    var _bTabsHidden = true;
    $("#content").prepend(htmlTabs).tabs();
    if (typeof biography !== "undefined") {
        biography.display();
    } else {
        $("#header").remove();
        $("#intro").remove();        
    }
    if (work.length){
        displayWork();
        _bTabsHidden = false;
    } else {
        $("#work").remove();
        $("#anchorWork").remove();
    }
    if (education.length) {
        displayEducation();
        _bTabsHidden = false;
    } else {
        $("#education").remove();
        $("#anchorEducation").remove();
    }
    if (projects.length) {
        displayProjects();
        _bTabsHidden = false;
    } else {
        $("#projects").remove();
        $("#anchorProjects").remove();
    }
    if (certificates.length) {
        _bTabsHidden = false;
        displayCertificates();
    } else {
        $("#certificates").remove();
        $("#anchorCertificates").remove();
    }
    if (_bTabsHidden) {
        $("#tabs").remove();
    }
});