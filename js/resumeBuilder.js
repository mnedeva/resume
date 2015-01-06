var biography = {
    "name": "Marina Nedeva",
    "role": "Web Developer",
    "contact": {
        "mobile": "+359 884 520 678",
        "email": "mnedeva@gmail.com",
        "github": "mnedeva",
        "twitter": "@mnedeva",
        "location": "Sofia, Bulgaria"
    },
    "description": "Communicative, team-oriented, open-minded,initiative and outgoing person.<br />Well-balanced personality, very cooperative, approachable and responsible.<br />Accomplished IT professional with more than 10 years practical experience.<br />Skilled PHP developer familiar with the current web technology trends Subversion systems.",
    "skills": [
        "web development", "testing", "databases", "JAVA", "C#"
    ],
    "pictureURL": "images/marina.jpg",
    "display": function() {
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
        $("#contacts div").width((100/Object.keys(biography.contact).length)+"%");   
     }       
}

var education = {
    "schools": [
        {
            "school": "High School Of Mathemathics",
            "year": 1994,
            "location": "Sofia, Bulgaria"
        },
        {
            "school": "Sofia University",
            "faculty": "Faculty of Mathematics and Informatics",        
            "year": 1997,
            "location": "Sofia, Bulgaria"        
        } 
    ],
    "display": function() {
        var education = this.schools;
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
 };

var work = {    
    "positions":[
        {
            "company": "Mochanin Ltd.",
            "year": "2004-2009",
            "position": "web developer",
            "location": "Sofia, Bulgaria"
        },
        {
            "company": "StangaOne",
            "year": "2010-2011",
            "position": "web developer",
            "location": "Sofia, Bulgaria"
        },
        {
            "company": "Ilyan.com",
            "year": "2011-2012",
            "position": "web developer",
            "location": "Sofia, Bulgaria"
        },
        {
            "company": "Circles Bulgaria",
            "year": "2012-present",
            "position": "web developer",
            "location": "Sofia, Bulgaria"
        }
    ],
    "display": function(){
        positions = this.positions.reverse();
        for (i in positions){
            var oWork = positions[i];
            var $html = htmlWork.replace('%company%', oWork.company).replace('%year%', oWork.year).replace('%position%', oWork.position);
            $("#work").append($html);
        }          
    }
 }
        

var projects = {
    "items":[
        {
            "name": "Service Creation Environment",
            "link": "",
            "technologies": "Yii Framework, JQuery, JQuery UI, HTML5",        
            "description": "A graphical UI for creating a database scheme and connections between fields. Database Version Control for users ."
        },
        {
            "name": "AzGusto (game)",
            "link": "",
            "technologies": "Yii Framework, Facebook",        
            "description": ""
        },
        {
            "name": "Suchard",
            "link": "",
            "technologies": "Yii Framework, Jquery",        
            "description": ""
        },
         {
            "name": "Milka Bulgaria",
            "link": "",
            "technologies": "Yii Framework, Facebook",        
            "description": ""
        },
        {
            "name": "Jacobs 3in1",
            "link": "",
            "technologies": "Yii Framework, Facebook",        
            "description": ""
        },   
        {
            "name": "Cartier Press",
            "link": "",
            "technologies": "Zend Framework, ExtJs",        
            "description": ""
        },    
        {
            "name": "MASSIVEGOOD",
            "link": "http:/www.massivegood.org ",
            "technologies": "Symfony, Doctrine, JQuery",        
            "description": ""
        },    
        {
            "name": "PDI (Custom and Economy Print Calculator + Store)",
            "link": "",
            "technologies": "Company Framework, Prototype (js), osCommerce",        
            "description": "The project was for calculating price, weight and shipping of variety of printing materials (notes, envelops, calendars, catalogs). The complexity of this project was the specific calculations for every one of them and understanding the process of printing industry."
        },  
        {
            "name": "EFLIX.TV",
            "link": "",
            "technologies": "Company Framework",        
            "description": "Project for renting Video DVDs and Games. The site had the fully automatic upgrade of all the information of new films and games, including pictures. The search was tagged to genre, actors, similar words, etc. It had the ability to generate barcode, addresses for delivery purpose. The customer old stock had to be transfer."
        }
    ],
    "display": function(){
        for (i in this.items){
            var oProject = this.items[i];
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
}
    
var certificates = {
    "items": [
        {
            "name": "JAVA",
            "school": "SoftAcad",
            "year": 2014
        }
    ],
    "display": function() {
        for (i in this.items){
          var oCert = this.items[i];
          var $html = htmlCertificates.replace('%school%', oCert.school).replace('%year%', oCert.year).replace('%name%', oCert.name);
          $("#certificates").append($html);
        }        
    }
}
    

