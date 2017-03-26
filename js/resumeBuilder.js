/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%","Samarth Kamboj");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
var skills = ["JavaScript" , "HTML" , "CSS" , "C++" , "C" , "GitHub"];
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); 

var bio = {
	name: "Samarth Kamboj",
	role: "Web Developer",
	contactInfo: {
		mobile: "9779467318",
		gmail:"DFG31197@gmail.com",
		github: "cocaine31197@gmail.com",
		location: "India"
			},
	bioPic: "images/fry.jpg",
	welcomeMessage: "MetalHead coming up!"
	skills: skills
};

var education = {
	schools: 
	[
		{
			name: "H.O.S.O School of douchebags",
			location: "India",
			degree: "Junior Year",
			Dates: "2012",
			url: "ageofshitlords.com"
		},

		{
			name: "D.A.V School",
			location: "India",
			degree: "Senior Year",
			Dates: "2015",
			url: "www.xvideos.com"
		}
	],

	onlineCourses :
	[
		{
			title: "Front-End Nano Degree",
			school: "Udacity",
			dates: "2017",
			url: "classroom.udacity.in"
		}
	]
};

var work = {
	jobs:
	[
		{
			employer: "null",
			title: "null",
			location: "India",
			dates: "null",
			description: "haven't had a job yet im learning."
		}
	]
};

var Projects = {
	project :
	[
		{
			title: "Portfolio",
			dates: "March 14",
			description: "Rather small project",
			images: "images/fry.jpg"
		}
	]
};
