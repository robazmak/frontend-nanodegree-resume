var skills ={};

skills = [
  ["great"],
  ["bilingual "],
  ["HTML"],
  ["CSS "]
  ];

var bio = {
  "name": "Paco Jones ",
  "role": "Front-End Explorer",
  "message" : "Hello and welcome to my world!!",
  "biopic" : "images/fry.jpg",
  "skills" : skills
  };
bio.contacts = ["0750432321",
                "sanchez@gmail.com",
                "https://github.com/0750kosse",
                "London"];

var workInfo = {};
workInfo.EmployerRole = ["Selfridges - Retail Manager", "Coca-Cola - Shop Assistant", "Kronenbourg - Can Filler"];
workInfo.Years = ["2010 to present", "2007 - 2010", "2000-2007"];
workInfo.City = ["London", "Ontario", "Amsterdam"];
workInfo.Description = ["Retail managers are responsible for the day-to-day running of stores or departments. The aim of any retail manager is to maximise profits while minimising costs.",

 "The roles involve rolling, topping and baking the cookies, serving our customers in a warm friendly manner, and assisting with the general upkeep and cleanliness of the shop.We need candidates who can work 40 hours per week, including some weekend work",

"Fills carrying cans with tobacco leaves from storage bins: Removes tobacco leaves from storage bins and spreads tobacco on table to separate leaves stuck together."];

var projects = {};
projects.title = ["UAE Expansion" , "Shop Refurbishing", "Alcoholic drinks per can"];
projects.dates = ["Jan 2014 to present", "2008-2010" , "2003"];
projects.description = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

"ALorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."];
projects.images = ["images/fry.jpg", "images/me.jpg", "images/fry.jpg"];



var education = {
  "schools": [
      {
      "name":"Autonoma",
      "city":"Marbella",
      "degree":"Perrito Piloto",
      "years":"2014 to present",
      "majors":" "
      },
      {
        "name":"Dauradell",
        "city":"Massachusets",
        "degree":"Self Driving Car",
        "years":"2010 to 2014"
      },
      {
      "name":"Esperanza",
      "city":"Badalona ",
      "degree":"EGB",
      "years":"2000 to 2009"
      },
      {
        "name":"Udacity - Front End Developer NanoDegree",
        "years":"Jan 2017 to present",
        "url" : "https://www.udacity.com/"
        },
      {
        "name":"FreeCodeCamp - HTML & CSS & JavaScript ",
        "years":"Jan 2016 to Jan 2017",
        "url" : "https://www.freecodecamp.com/"
          }

        ]
      };

var locations = {};
locations.url = ["https://goo.gl/maps/JkvzVz5hYG92"];


//PERSONAL INFO SECTION
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var HTMLcontactGeneric;
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[0]);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts[1]);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts[2]);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[3]);

var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);

var HTMLskillsStart;
var formattedSkills0 = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[2]);
var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[3]);

//WORK SECTION
var HTMLworkStart;
var formattedEmployer = HTMLworkEmployer.replace("%data%", workInfo.EmployerRole[0]);
var formattedYears = HTMLworkDates.replace("%data%", workInfo.Years[0]);
var formattedLocation = HTMLworkLocation.replace("%data%", workInfo.City[0]);
var formattedDescription = HTMLworkDescription.replace("%data%", workInfo.Description[0]);

var HTMLworkStart;
var formattedEmployer1 = HTMLworkEmployer.replace("%data%", workInfo.EmployerRole[1]);
var formattedYears1 = HTMLworkDates.replace("%data%", workInfo.Years[1]);
var formattedLocation1 = HTMLworkLocation.replace("%data%", workInfo.City[1]);
var formattedDescription1 = HTMLworkDescription.replace("%data%", workInfo.Description[1]);

var HTMLworkStart;
var formattedEmployer2 = HTMLworkEmployer.replace("%data%", workInfo.EmployerRole[2]);
var formattedYears2 = HTMLworkDates.replace("%data%", workInfo.Years[2]);
var formattedLocation2 = HTMLworkLocation.replace("%data%", workInfo.City[2]);
var formattedDescription2 = HTMLworkDescription.replace("%data%", workInfo.Description[2]);


//PROJECTS SECTION
var HTMLprojectStart;
var formattedTitle = HTMLprojectTitle.replace("%data%", projects.title[0]);
var formattedDate = HTMLprojectDates.replace("%data%" , projects.dates[0]);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%" , projects.description[0]);
var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.images[0]);


var HTMLprojectStart;
var formattedTitle1 = HTMLprojectTitle.replace("%data%", projects.title[1]);
var formattedDate1 = HTMLprojectDates.replace("%data%" , projects.dates[1]);
var formattedProjectDescription1 = HTMLprojectDescription.replace("%data%" , projects.description[1]);
var formattedProjectImage1 = HTMLprojectImage.replace("%data%", projects.images[1]);


var HTMLprojectStart;
var formattedTitle2 = HTMLprojectTitle.replace("%data%", projects.title[2]);
var formattedDate2 = HTMLprojectDates.replace("%data%" , projects.dates[2]);
var formattedProjectDescription2 = HTMLprojectDescription.replace("%data%" , projects.description[2]);
var formattedProjectImage2 = HTMLprojectImage.replace("%data%", projects.images[2]);


//var HTMLschoolStart;
var lastSchool = HTMLschoolName.replace("%data%", education.schools[0].name);
var degree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var datesAttended = HTMLschoolDates.replace("%data%", education.schools[0].years);

var HTMLschoolStart;
var lastSchool1 = HTMLschoolName.replace("%data%", education.schools[1].name);
var degree1 = HTMLschoolDegree.replace("%data%", education.schools[1].degree);
var datesAttended1 = HTMLschoolDates.replace("%data%", education.schools[1].years);

var HTMLschoolStart;
var lastSchool2 = HTMLschoolName.replace("%data%", education.schools[2].name);
var degree2 = HTMLschoolDegree.replace("%data%", education.schools[2].degree);
var datesAttended2 = HTMLschoolDates.replace("%data%", education.schools[2].years);
var majors = HTMLschoolMajor.replace("%data%", education.schools.majors);

var HTMLonlineClasses;
var formattedOnlineCourses3 = HTMLonlineTitle.replace("%data%", education.schools[3].name);
var OnlineCoursesDates3 = HTMLonlineDates.replace("%data%", education.schools[3].years);
var OnlineCoursesURL3 = HTMLonlineURL.replace("%data%", education.schools[3].url);

var HTMLonlineClasses;
var formattedOnlineCourses4 = HTMLonlineTitle.replace("%data%", education.schools[4].name);
var OnlineCoursesDates4 = HTMLonlineDates.replace("%data%", education.schools[4].years);
var OnlineCoursesURL4 = HTMLonlineURL.replace("%data%", education.schools[4].url);

var mylocations = googleMap.replace("%data%",locations.url[0]);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedMessage);
$("#header").append(formattedImage);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGit);
    $("#topContacts").append(formattedLocation);

/*$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills0);
$("#header").append(formattedSkills1);
$("#header").append(formattedSkills2);
$("#header").append(formattedSkills3);
*/
    $("#workExperience").append(HTMLworkStart);
    $("#workExperience").append(formattedEmployer);
    $("#workExperience").append(formattedYears);
    $("#workExperience").append(formattedLocation);
    $("#workExperience").append(formattedDescription);

    $("#workExperience").append(HTMLworkStart);
    $("#workExperience").append(formattedEmployer1);
    $("#workExperience").append(formattedYears1);
    $("#workExperience").append(formattedLocation1);
    $("#workExperience").append(formattedDescription2);

    $("#workExperience").append(HTMLworkStart);
    $("#workExperience").append(formattedEmployer2);
    $("#workExperience").append(formattedYears2);
    $("#workExperience").append(formattedLocation2);
    $("#workExperience").append(formattedDescription2);

$("#projects").append(HTMLprojectStart);
$("#projects").append(formattedTitle);
$("#projects").append(formattedDate);
$("#projects").append(formattedProjectDescription);
$("#projects").append(formattedProjectImage);
$("#projects").append(formattedProjectImage);

$("#projects").append(HTMLprojectStart);
$("#projects").append(formattedTitle1);
$("#projects").append(formattedDate1);
$("#projects").append(formattedProjectDescription1);
$("#projects").append(formattedProjectImage1);
$("#projects").append(formattedProjectImage1);

$("#projects").append(HTMLprojectStart);
$("#projects").append(formattedTitle2);
$("#projects").append(formattedDate2);
$("#projects").append(formattedProjectDescription2);
$("#projects").append(formattedProjectImage);
$("#projects").append(formattedProjectImage);

    $("#education").append(HTMLschoolStart);
    $("#education").append(lastSchool);
    $("#education").append(degree);
    $("#education").append(datesAttended);


    $("#education").append(HTMLschoolStart);
    $("#education").append(lastSchool1);
    $("#education").append(degree1);
    $("#education").append(datesAttended1);
    $("#education").append(majors);

    $("#education").append(HTMLschoolStart);
    $("#education").append(lastSchool2);
    $("#education").append(degree2);
    $("#education").append(datesAttended2);
    $("#education").append(majors);

    $("#education").append(HTMLonlineClasses);
    $("#education").append(formattedOnlineCourses3);
    $("#education").append(OnlineCoursesDates3);
    $("#education").append(OnlineCoursesURL3);

    $("#education").append(formattedOnlineCourses4);
    $("#education").append(OnlineCoursesDates4);
    $("#education").append(OnlineCoursesURL4);

$("#mapDiv").append(mylocations);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGit);
$("#footerContacts").append(formattedLocation);


/*
Place a copy of your image file into the images directory.
If the name of the image file is me.jpg, the URL for the image will then be images/me.jpg

Edit js/resumeBuilder.js in your text editor,
and view the results by opening index.html in the web browser of your choice.
*/
