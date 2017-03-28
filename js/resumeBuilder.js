/*
This is empty on purpose! Your code to build the resume will go here.
 */
// No point in encapsulating bio since there will only be one bio?
var bio = {
    "name": "Samarth Kamboj",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9779467318",
        "email": "dfg31197@gmail.com",
        "github": "cocaine31197@gmail.com",
        "location": "Haryana , India"
    },
    "biopic": "images/DFG.jpg",
    "welcomeMessage": "MetalHead coming up!",
    "skills": ["JavaScript", "HTML", "CSS", "C++", "C", "GitHub"]
}

var education = {

    "schools": [{
            "name": "H.O.S.O School",
            "location": "India",
            "degree": "Junior Year",
            "dates": "2012",
            "major": ["Non Medical"]
        },

        {
            "name": "D.A.V School",
            "location": "India",
            "degree": "Senior Year",
            "dates": "2015",
            "major": ["Non Medical"]
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
            "location": "Haryana",
            "dates": "2019",
            "description": "Haven't had any jobs yet but hope i get one !"
        },
        {
            "employer": "ABC",
            "title": "Web Ninja",
            "location": "Haryana",
            "dates": "2019",
            "description": "/m/"
        }
    ]
}

var projects = {
    "projects": [{
            "title": "Portfolio",
            "dates": "March 14",
            "images": ["images/one.jpg"],
            "description": "Rather small project"

        },
        {
            "title": "Resume",
            "dates": "March 26",
            "images": ["images/two.jpg"],
            "description": "I ain't getting that job now am i? ;p"

        }
    ]
}
bio.display = function()

{
    var formattedName = HTMLheaderName.replace("%data%", "Samarth Kamboj");
    var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkills;
        for (var i = 0; i < bio.skills.length; i++) {
            formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
    //Displaying Contacts inside Bio
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

}


work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (x=0; x< work.jobs.length;x++) {
        var Emp = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
        var tiTle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
        var formattedETitle = Emp + tiTle;
        $(".work-entry:last").append(formattedETitle);

        var dAtes = HTMLworkDates.replace("%data%", work.jobs[x].dates);
        $(".work-entry:last").append(dAtes);

        var desc = HTMLworkDescription.replace("%data%", work.jobs[x].description);
        $(".work-entry:last").append(desc);

        var lOc = HTMLworkLocation.replace("%data%", work.jobs[x].location);
        $(".work-entry:last").append(lOc);

    }
}


// Function that returns mouse coordinates , don't see why im gonna need this here
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);

});
// Function displays "Projects"
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) // Spent a day here figuring out what i was doing wrong , sorted it out first thing next morning
    {
        $("#projects").append(HTMLprojectStart);
        var proTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(proTitle);

        var proDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(proDates);

        var proDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(proDesc);

        if (projects.projects[i].images.length > 0) {
            for (var p = 0; p < projects.projects[i].images.length; p++) {
                var proImg = HTMLprojectImage.replace("%data%", projects.projects[i].images[p]);
                $(".project-entry:last").append(proImg);
            }
        }

    }
}

// Function displays "Education"
education.display = function() {

    for (var i = 0; i < education.schools.length; i++) {
        // School Details (i gotta put that in my real resume?)
        $("#education").append(HTMLschoolStart);
        $("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
        $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        $("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        for(var j=0;j < education.schools[i].major.length;j++)
        {$("#education").append(HTMLschoolMajor.replace("%data%", education.schools[i].major[j]));}

    }

    for (i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
        $("#education").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
        $("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
        $("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));

    }
}
bio.displayfooter = function() {
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}

//Execution of functions
work.display();
bio.display();
education.display();
projects.display();
bio.displayfooter();
// Google maps (Not working for some reason , I've got my own API and put it in but maps not showing up)
$("#mapDiv").append(googleMap);