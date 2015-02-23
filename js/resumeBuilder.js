var work = {
	"jobs" : [
		{
			"employer" : "University of Illinois",
			"title" : "Research Programmer",
			"location" : "Champaign, IL 61821",
			"dates" : "March 2005 - Current",
			"description" : "Programmer, Webmaster, Special Projects, Desktop Support, Videography, Photography. Pretty much if it plugged into a wall or ran on batteries, I supported/used it."
		}
	],
	display : function() {
		for(job in work.jobs) {
			var cur = work.jobs[job];
			$('#workExperience').append(HTMLworkStart);

			var emp = HTMLworkEmployer.replace('%data%',cur.employer);
			var title = HTMLworkTitle.replace('%data%',cur.title);
			var fullTitle = emp + ' ' + title;
			$('.work-entry:last').append(fullTitle);
			$('.work-entry:last').append(HTMLworkDates.replace('%data%',cur.dates));
			$('.work-entry:last').append(HTMLworkLocation.replace('%data%',cur.location));
			$('.work-entry:last').append(HTMLworkDescription.replace('%data%',cur.description));
		}
	}
};
var projects = {
	projects : [
		{
			"title" : "Project 1",
			"dates" : "March 2005 - April 2005",
			"description" : "A Description",
			"images" : ["http://placehold.it/200x200","http://placehold.it/200x200"]
		},
		{
			"title" : "Project 2",
			"dates" : "April 2005 - Current",
			"description" : "Another Description",
			"images" : ["http://placehold.it/200x200","http://placehold.it/200x200"]
		}
	],
	display : function() {
		for(project in projects.projects) {
			var cur = projects.projects[project];
			$('#projects').append(HTMLprojectStart);

			$('.project-entry:last').append(HTMLprojectTitle.replace('%data%',cur.title));
			$('.project-entry:last').append(HTMLprojectDates.replace('%data%',cur.dates));
			$('.project-entry:last').append(HTMLworkLocation.replace('%data%',cur.description));

			for(image in cur.images) {
				img = cur.images[image];
				$('.project-entry:last').append(HTMLprojectImage.replace('%data%',img));
			}
		}
	}
};
var bio = {
	"name"	: "Roger Eveland",
	"role" : "Web Developer",
	"welcomeMessage" : getRandomQuote(),
	"skills" : ["HTML","CSS","JavaScript","ColdFusion","PHP","SQL"],
	"contacts" : {
		"mobile" : "217-418-8925",
		"email" : "roger.eveland@gmail.com",
		"github" : "kinsonerikson",
		"location" : "Champaign, IL"
	},
	"biopic" : "http://placehold.it/200x200",
	display : function() {
		var name = HTMLheaderName.replace('%data%',bio.name);
		var role = HTMLheaderRole.replace('%data%',bio.role);
		$('#header').prepend(role);
		$('#header').prepend(name);
		for(contact in bio.contacts) {
			var contactItem = HTMLcontactGeneric.replace('%contact%',contact);
			contactItem = contactItem.replace('%data%',bio.contacts[contact]);
			$('#topContacts').append(contactItem);
		}
		var pic = HTMLbioPic.replace('%data%',bio.biopic);
		$('#header').append(pic);

		var msg = HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage);
		$('#header').append(msg);

		$('#header').append(HTMLskillsStart);

		for(skill in bio.skills) {
			var skillItem = HTMLskills.replace('%data%',bio.skills[skill]);
			$('#skills').append(skillItem);
		}
	}
};
var education = {
	"schools" : [
		{
			"name" : "Greenville College",
			"location" : "Greenville, Il",
			"degree" : "BS",
			"majors" : ["Institutional Communications"],
			"dates" : "September 2007 - March 2009",
			"url" : "http://www.greenville.edu"
		},
		{
			"name" : "Parkland College",
			"location" : "Champaign, Il",
			"degree" : "AS",
			"majors" : ["Computer Science"],
			"dates" : "August 2002 - May 2005",
			"url" : "http://www.parkland.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Introduction to HTML/CSS",
			"school" : "Parkland College",
			"dates" : "2002-2003",
			"url" : ""
		},
		{
			"title" : "Intro to Computer Science",
			"school" : "Udacity",
			"dates" : "2013",
			"url" : "https://www.udacity.com/course/cs101"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud304"
		}

	],
	display : function() {
		for(school in education.schools) {
			var cur = education.schools[school];
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLschoolName.replace('%data%',cur.name) + HTMLschoolDegree.replace('%data%',cur.degree));
			$('.education-entry:last').append(HTMLschoolDates.replace('%data%',cur.dates));
			$('.education-entry:last').append(HTMLschoolLocation.replace('%data%',cur.location));
			$('.education-entry:last').append(HTMLschoolMajor.replace('%data%',cur.majors));
		}
		$('#education').append(HTMLonlineClasses);
		for(course in education.onlineCourses) {
			var cur = education.onlineCourses[course];
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLonlineTitle.replace('%data%',cur.title) + HTMLonlineSchool.replace('%data%',cur.title));
			$('.education-entry:last').append(HTMLonlineDates.replace('%data%',cur.dates));
			$('.education-entry:last').append(HTMLonlineURL.replace('%data%',cur.url));
		}
	}
};
function getRandomQuote() {
	var quotes = [
		"Random Quotes!",
		"Experienced at Projects!",
		"Enjoys long walks in the forest!",
		"If you like piña coladas and writing code in the rain!",
		"Personalizing boilerplate projects since 2002!"
	]
	var randomNumber = Math.floor(Math.random() * ((quotes.length-1) - 0 + 1)) + 0;
	return quotes[randomNumber];
}
function generateMap(){
	$('#mapDiv').append(googleMap);
}
bio.display();
work.display();
projects.display();
education.display();
generateMap();