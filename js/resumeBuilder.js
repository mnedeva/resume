var biography = {
    "name": "Marina Nedeva",
    "role": "Web Developer",
    "contact": {
        "mobile": "+359 888 555 666",
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

var education = [
    {
        "school": "High School Of Mathemathics",
        "year": 1994,
        "location": "Sofia, Bulgaria"
    },
    {
        "school": "Sofia Univercity",
        "faculty": "Faculty of Mathematics and Informatics",        
        "year": 1997,
        "location": "Sofia, Bulgaria"        
    },
    
];

var work = [
    {
        "company": "Mochanin Ltd.",
        "year": "2004-2009",
        "position": "web developer"
    },
    {
        "company": "StangaOne",
        "year": "2010-2011",
        "position": "web developer"
    },
    {
        "company": "Ilyan.com",
        "year": "2011-2012",
        "position": "web developer"
    },
    {
        "company": "Circles Bulgaria",
        "year": "2012-present",
        "position": "web developer"
    }
    
];
        

var projects = [
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
    },  
];
    
var certificates = [
    {
        "name": "JAVA",
        "school": "SoftAcad",
        "year": 2014
    }
];
    

