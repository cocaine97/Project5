/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%","Samarth Kamboj");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); 

var bio = {
	"name": "Samarth Kamboj",
	"role": "Web Developer",
	"contactInfo": {
		"mobile": "9779467318",
		"gmail": "DFG31197@gmail.com",
		"github": "cocaine31197@gmail.com",
		"location": "India"
	},
	"bioPic": "images/fry.jpg",
	"welcomeMessage": "MetalHead coming up!",
	"skills": ["JavaScript", "HTML", "CSS", "C++", "C", "GitHub"]
}

var education = {

	"schools": 
	[
		{
			"name": "H.O.S.O School of douchebags",
			"location": "India",
			"degree": "Junior Year",
			"Dates": "2012",
			"url": "ageofshitlords.com"
		},

		{
			"name": "D.A.V School",
			"location": "India",
			"degree": "Senior Year",
			"Dates": "2015",
			"url": "www.xvideos.com"
		}
	],

	"onlineCourses": [{
		"title": "Front-End Nano Degree",
		"school": "Udacity",
		"dates": "2017",
		"url": "classroom.udacity.in"
	}]
}

var work = {
	"jobs": [{
		"employer": "Could be Anyone",
		"title": "Full-Stack Web Developer",
		"location": "India",
		"dates": "2019",
		"description": "Haven't had any jobs yet but hope i get one !"
	},
	{
		"employer": "ABC",
		"title": "Web Ninja",
		"location": "India",
		"dates": "2019",
		"description": "\m/"
	}
	]
}

var Projects = {
	"project": [{
		"title": "Portfolio",
		"dates": "March 14",
		"description": "Rather small project",
		"images": "images/fry.jpg"
	}]
}

if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	var formattedSkills;
	for(var i=0;i<bio.skills.length;i++)
	{
		formattedSkills= HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
}
function displayWork()
{
$("#workExperience").append(HTMLworkStart);
for(x in work.jobs)
{
	var Emp = HTMLworkEmployer.replace("%data%",work.jobs[x].employer);
		var tiTle = HTMLworkTitle.replace("%data%",work.jobs[x].title);
	var formattedETitle = Emp + tiTle;
	$(".work-entry:last").append(formattedETitle);

	var dAtes = HTMLworkDates.replace("%data%",work.jobs[x].dates);
	$(".work-entry:last").append(dAtes);

	var desc = HTMLworkDescription.replace("%data%",work.jobs[x].description);
	$(".work-entry:last").append(desc);

	var lOc = HTMLworkLocation.replace("%data%",work.jobs[x].location);
	$(".work-entry:last").append(lOc);

}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
  
});