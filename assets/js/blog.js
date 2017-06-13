// --------------    POSTS BREAKDOWN    ------------
// posts = [array of posts (objects) with day, date, and projects]
// project = [array of projects (objects) with title and array of info updates]

//var posts = require("./posts.js");
var posts = [
	{
		day: 1,
		date: "April 1, 2017", 
		projects: [
			{
				title: "Liri-Node-App",
				info: ["Finalized the project with the final additions of menu options and functions"]
			},{
				title: "D_D Project",
				info: ["Creation of a page that will enhance the user's Dungeons and Dragons experience"]
			}
		]
	},{
		day: 2,
		date: "April 2, 2017", 
		projects: [
			{
				title: "D_D Project",
				info: ["Addition of Firebase Database to allow for users to log-in and store their preferences",
						"Creation of a basic D and D Character Creator sheet that stores to Firebase"]
			}
		]
	},{
		day: 3,
		date: "April 3, 2017", 
		projects: [
			{
				title: "Blog-Personal-Portfolio",
				info: ["Creation of Blog Page to show my coding learning experience ",
						"Layout of Blog page and the first Blog post regarding HTML and CSS"]
			}
		]
	},{
		day: 4,
		date: "April 4, 2017", 
		projects: [
			{
				title: "Blog-Personal-Portfolio",
				info: ["Developing the styling for the Blog"]
			},{
				title: "Flashcard-Generator",
				info: ["Basic layout of the individual pages of the generator"]
			}
		]
	},{
		day: 5,
		date: "April 5, 2017", 
		projects: [
			{
				title: "Flashcard-Generator",
				info: ["Developing the Front/Back option .js and .txt files",
						"Creating the basic files for Cloze option"]
			}
		]
	},{
		day: 6,
		date: "April 6, 2017", 
		projects: [
			{
				title: "Flashcard-Generator",
				info: ["Developing the Cloze .js and .txt with simple functionality"]
			},{
				title: "Blog-Personal-Portfolio",
				info: ["Addition of the 100 Day Coding Challenge panel to the blog"]
			}
		]
	},{
		day: 7,
		date: "April 7, 2017", 
		projects: [
			{
				title: "Flashcard-Generator",
				info: ["Reformat Basic.tx to JSON object and addition of reader and writter",
						"Seperation of the constructors to files"]
			}
		]
	},{
		day: 8,
		date: "April 8, 2017", 
		projects: [
			{
				title: "Flashcard-Generator",
				info: ["Addition of options landing page with the npm inquirer"]
			},{
				title: "Bamazon: Node.js, MySQL",
				info: ["Creation of node application used to access local Database"]
			}
		]
	},{
		day: 9,
		date: "April 9, 2017", 
		projects: [
			{
				title: "Bamazon: Node.js, MySQL",
				info: ["Development of Bamazon Customer option",
						"Addition of Constructor and MySQL database with table 'products'"]
			}
		]
	},{
		day: 10,
		date: "April 10, 2017", 
		projects: [
			{
				title: "Bamazon: Node.js, MySQL",
				info: ["Creation and Development of Bamazon Manager option",]
			}
		]
	},{
		day: 11,
		date: "April 11, 2017", 
		projects: [
			{
				title: "Bamazon: Node.js, MySQL",
				info: ["Creation and Development of Bamazon Supervisor option",
						"Addition of Bamazon landing page 'Index'"]
			}
		]
	},{
		day: 12,
		date: "April 12, 2017", 
		projects: [
			{
				title: "Bamazon: Node.js, MySQL",
				info: ["Addition of MySQL table 'departments'",
						"Development and functionality to the Bamazon Sales Log"]
			}
		]
	},{
		day: 13,
		date: "April 13, 2017", 
		projects: [
			{
				title: "Blog-Personal-Portfolio",
				info: ["Updates to 100 Day Coding Challenge and start of Blog Post #2"]
			},{
				title: "Personal-Portfolio",
				info: ["Changes to portfolio style sheet to add functionailty and compatable styles across all pages"]
			}
		]
	},{
		day: 14,
		date: "April 14, 2017", 
		projects: [
			{
				title: "Blog-Personal-Portfolio",
				info: ["Finalization of Post #2 and challenge posts"]
			},{
				title: "Gif-Search",
				info: ["Bug fixes to Gif-Search and functionailty"]
			}
		]
	},{
		day: 15,
		date: "April 15, 2017", 
		projects: [
			{
				title: "Restraunt-Resrvation (Group)",
				info: ["Main responsibilities html, css, and api-routes"]
			},{
				title: "Bamazon: Node.js, MySQL",
				info: ["Basic updates and submission of all node files"]
			}
		]
	}, {
		day: 16,
		date: "April 16, 2017", 
		projects: [
			{
				title: "Bamazon: Node.js, MySQL)",
				info: ["Finalization and clean up of node display"]
			},{
				title: "Texas Quidditch",
				info: ["Addition of tabbed content", 
						"Creation of panels and styling adjustments"]
			}
		]
	},{
		day: 17,
		date: "April 17, 2017", 
		projects: [
			{
				title: "FriendFinder",
				info: ["Creation of a basic array comparison node application"]
			}
		]
	},{
		day: 18,
		date: "April 18, 2017", 
		projects: [
			{
				title: "FriendFinder",
				info: ["Addition of simple file layout with HTML, CSS, and JS files"]
			}
		]
	},{
		day: 19,
		date: "April 19, 2017", 
		projects: [
			{
				title: "FriendFinder",
				info: ["Adjustments to JS to include node packages"]
			}
		]
	},{
		day: 20,
		date: "April 20, 2017", 
		projects: [
			{
				title: "FriendFinder",
				info: ["JavaScript adjustments and additions to the SQL database"]
			}
		]
	},{
		day: 21,
		date: "April 21, 2017", 
		projects: [
			{
				title: "FriendFinder",
				info: ["Configuration of relations between SQL DB and JS files"]
			}
		]
	},{
		day: 22,
		date: "April 22, 2017", 
		projects: [
			{
				title: "FriendFinder",
				info: ["Finalization of CSS styling using bootstrap"]
			}
		]
	},{
		day: 23,
		date: "April 23, 2017", 
		projects: [
			{
				title: "burger: Node.js, ORM, MySQL",
				info: ["Creation of 'burger' repo with MySQL ORM capabilities", 
						"Simple repo structure with test files"]
			}
		]
	},{
		day: 24,
		date: "April 24, 2017", 
		projects: [
			{
				title: "burger: Node.js, ORM, MySQL",
				info: ["Basic JavaScript to function with sample data", 
						"Addition of Node-Modules"]
			}
		]
	},{
		day: 25,
		date: "April 25, 2017", 
		projects: [
			{
				title: "burger: Node.js, ORM, MySQL",
				info: ["Addition of API and HTML Routes for DB correlation"]
			}
		]
	},{
		day: 26,
		date: "April 26, 2017", 
		projects: [
			{
				title: "burger: Node.js, ORM, MySQL",
				info: ["Creation of index.handlebars for handling of base html layout", 
						"Finalization of HTML and CSS styling"]
			}
		]
	},{
		day: 27,
		date: "April 27, 2017", 
		projects: [
			{
				title: "Texas_Quid:JS, HTML, CSS",
				info: ["Panelling of body html content"]
			}
		]
	},{
		day: 28,
		date: "April 28, 2017", 
		projects: [
			{
				title: "Texas_Quid:JS, HTML, CSS",
				info: ["Addition of in fram youtube video"]
			}
		]
	},{
		day: 29,
		date: "April 29, 2017", 
		projects: [
			{
				title: "Bootstrap_Portfolio",
				info: ["Additions to the blog.js", 
						"Adding panels to portfolio's HTML"]
			}
		]
	},{
		day: 30,
		date: "April 30, 2017", 
		projects: [
			{
				title: "Bootstrap_Portfolio",
				info: ["Additions to blog.js"]
			},{
				title: "sequilizedBurger: Node.js, Sequelize, MySQL",
				info: ["Creation of repo and file layout"]
			}
		]
	},{
		day: 31,
		date: "May 1, 2017", 
		projects: [
			{
				title: "Bootstrap_Portfolio",
				info: ["Additions and styling to overall site"]
			}
		]
	},{
		day: 32,
		date: "May 2, 2017", 
		projects: [
			{
				title: "CAH_repo",
				info: ["Creation of repo and file layout", 
						"Basic structure of sequelized MySQL DB"]
			},{
				title: "sequilizedBurger: Node.js, Sequelize, MySQL",
				info: ["Basic page HTML designed and established"]
			}
		]
	},{
		day: 33,
		date: "May 3, 2017", 
		projects: [
			{
				title: "sequilizedBurger: Node.js, Sequelize, MySQL",
				info: ["Basic API and HTML route creation"]
			}
		]
	},{
		day: 34,
		date: "May 4, 2017", 
		projects: [
			{
				title: "sequilizedBurger: Node.js, Sequelize, MySQL",
				info: ["Adjustments to DB calls and Sequelization"]
			},{
				title: "arcade_repo (group)",
				info: ["Creation of Arcade Repo to utalize Sequelized DB"]
			}
		]
	},{
		day: 35,
		date: "May 5, 2017", 
		projects: [
			{
				title: "sequilizedBurger: Node.js, Sequelize, MySQL",
				info: ["Finalization of JavaScript and back-end", 
						"Final adjustments to CSS and HTML layout"]
			}
		]
	},{
		day: 36,
		date: "May 6, 2017", 
		projects: [
			{
				title: "arcade_repo (group)",
				info: ["Basic layout to Simon Says game", 
						"Basic layout to landing page / leader board"]
			}
		]
	},{
		day: 37,
		date: "May 7, 2017", 
		projects: [
			{
				title: "arcade_repo (group)",
				info: ["Basic site and link layouts", 
						"Initional HTML-routes and calls"]
			}
		]
	},{
		day: 38,
		date: "May 8, 2017", 
		projects: [
			{
				title: "arcade_repo (group)",
				info: ["Construction to the Simon Says game JavaScript"]
			}
		]
	},{
		day: 39,
		date: "May 9, 2017", 
		projects: [
			{
				title: "arcade_repo (group)",
				info: ["Additions and corrections to the Simon Says game", 
						"Basic Home page and leaderboard HTML layouts"]
			}
		]
	},{
		day: 40,
		date: "May 10, 2017", 
		projects: [
			{
				title: "arcade_repo (group)",
				info: ["Construction of site wide API routes and calls", 
						"Assistance and corrections to BlackJack game"]
			}
		]
	},{
		day: 41,
		date: "May 11, 2017", 
		projects: [
			{
				title: "arcade_repo (group)",
				info: ["Addition to MySQL DB of player specific option", 
						"Finalization of Simon Says game functionality"]
			}
		]
	},{
		day: 42,
		date: "May 12, 2017", 
		projects: [
			{
				title: "arcade_repo (group)",
				info: ["In depth creation of Home Page and Simon Says CSS", 
						"Assistance to the functionality of BlackJack game", 
						"Current score live update and display to Simon Says"]
			}
		]
	},{
		day: 43,
		date: "May 13, 2017", 
		projects: [
			{
				title: "arcade_repo (group)",
				info: ["Syncronization of site wide styling", 
						"Correction to Log-in display"]
			}
		]
	},{
		day: 44,
		date: "May 14, 2017", 
		projects: [
			{
				title: "arcade_repo (group)",
				info: ["Current score live update and display site wide", 
						"Updateds to site wide styling"]
			}
		]
	},{
		day: 45,
		date: "May 15, 2017", 
		projects: [
			{
				title: "arcade_repo (group)",
				info: ["Last minute bug corrections"]
			}, {
				title: "arcade_solo_repo",
				info: ["Creation of basic file layout"]
			}
		]
	},{
		day: 46,
		date: "May 16, 2017", 
		projects: [
			{
				title: "arcade_solo_repo",
				info: ["Addition to cards.js basic pseudocode for new BlackJack"]
			}, {
				title: "Bootstrap-Portfolio",
				info: ["Addition to 100 Day Coding Challenge in blog.js"]
			}
		]
	},{
		day: 47,
		date: "May 17, 2017", 
		projects: [
			{
				title: "Bootstrap-Portfolio",
				info: ["Addition and Correction to 100 Day Coding Challenge in blog.js"]
			}
		]
	},{
		day: 48,
		date: "May 18, 2017", 
		projects: [
			{
				title: "Bootstrap-Portfolio",
				info: ["Addition to 100 Day Coding Challenge in blog.js"]
			}
		]
	},{
		day: 49,
		date: "May 19, 2017", 
		projects: [
			{
				title: "Bootstrap-Portfolio",
				info: ["Brought the 100 Day Coding Challenge in blog.js up to date"]
			}
		]
	},{
		day: 50,
		date: "May 20, 2017", 
		projects: [
			{
				title: "MongoScraper",
				info: ["Created with basic file construction"]
			},{
				title: "QuidApp",
				info: ["Created with basic file construction"]
			}
		]
	},{
		day: 51,
		date: "May 21, 2017", 
		projects: [
			{
				title: "MongoScraper",
				info: ["Database Set-up with MongoDB"]
			},{
				title: "QuidApp",
				info: ["Log-in creation using MongoDB and Passport"]
			}
		]
	},{
		day: 52,
		date: "May 22, 2017", 
		projects: [
			{
				title: "QuidApp",
				info: ["Creation of game.html and index.html",
						"Establishing of html-routes"]
			}
		]
	},{
		day: 53,
		date: "May 23, 2017", 
		projects: [
			{
				title: "QuidApp",
				info: ["Basic functionality of game.js"]
			}
		]
	},{
		day: 54,
		date: "May 24, 2017", 
		projects: [
			{
				title: "MongoScraper",
				info: ["Model creation and addaption for MongoDB construction"]
			}
		]
	},{
		day: 55,
		date: "May 25, 2017", 
		projects: [
			{
				title: "MongoScraper",
				info: ["html creation with express-handlebars",
						"route declration for handlebar displays"]
			}
		]
	},{
		day: 56,
		date: "May 26, 2017", 
		projects: [
			{
				title: "MongoScraper",
				info: ["API routes declared for database gets/posts"]
			}
		]
	},{
		day: 57,
		date: "May 27, 2017", 
		projects: [
			{
				title: "MongoScraper",
				info: ["constucting routes, model, and DB compatability"]
			}
		]
	},{
		day: 58,
		date: "May 28, 2017", 
		projects: [
			{
				title: "MongoScraper",
				info: ["handlebar and DB adjustments"]
			}
		]
	},{
		day: 59,
		date: "May 29, 2017", 
		projects: [
			{
				title: "MongoScraper",
				info: ["CSS styling for express-handlebar layouts", 
						"adjustment of cheerio (scraper) to point to theonion.com"]
			}
		]
	},{
		day: 60,
		date: "May 30, 2017", 
		projects: [
			{
				title: "QuidApp",
				info: ["adjustments to html-routes", 
						"adjustments to game.js"]
			}
		]
	},{
		day: 61,
		date: "May 31, 2017", 
		projects: [
			{
				title: "NYTReact",
				info: ["app construction with basic file layout"]
			}
		]
	},{
		day: 62,
		date: "June 1, 2017", 
		projects: [
			{
				title: "NYTReact",
				info: ["establishing calls to MongoDB"]
			}
		]
	},{
		day: 63,
		date: "June 2, 2017", 
		projects: [
			{
				title: "NYTReact",
				info: ["layout to react html display"]
			}
		]
	},{
		day: 64,
		date: "June 3, 2017", 
		projects: [
			{
				title: "NYTReact",
				info: ["establishing and adjustments to api routes"]
			}
		]
	},{
		day: 65,
		date: "June 4, 2017", 
		projects: [
			{
				title: "Main Portfolio",
				info: ["creation and alighnment from Bootstrap-Portfolio",
						"deployment established to paden-pace.com"]
			},{
				title: "Quid App",
				info: ["addition of preestablished league to game.js"]
			}
		]
	},{
		day: 66,
		date: "June 5, 2017", 
		projects: [
			{
				title: "burger_app",
				info: ["DB adjustment and deployment to heroku"]
			},{
				title: "burgerSequelized",
				info: ["DB adjustment and deployment to heroku"]
			},{
				title: "MongoScraper",
				info: ["DB adjustment and deployment to heroku"]
			}
		]
	},{
		day: 67,
		date: "June 6, 2017", 
		projects: [
			{
				title: "Main Portfolio",
				info: ["Updates to blog.js"]
			}
		]
	},{
		day: 68,
		date: "June 7, 2017", 
		projects: [
			{
				title: "NYTreact",
				info: ["adjustments to heroku DB"]
			}
		]
	},{
		day: 69,
		date: "June 8, 2017", 
		projects: [
			{
				title: "NYTreact",
				info: ["route adjustment and final stylization"]
			}
		]
	},{
		day: 70,
		date: "June 9, 2017", 
		projects: [
			{
				title: "Quid App",
				info: ["adjustment for Mongo DB", 
						"addition of react and tournament files"]
			}
		]
	},{
		day: 71,
		date: "June 10, 2017", 
		projects: [
			{
				title: "Main Portfolio",
				info: ["addition of random number game", 
						"addition of gif application"]
			}
		]
	},{
		day: 72,
		date: "June 11, 2017", 
		projects: [
			{
				title: "Main Portfolio",
				info: ["addition of hangman game", 
						"addition of See You There application"]
			}
		]
	},{
		day: 73,
		date: "June 12, 2017", 
		projects: [
			{
				title: "Main Portfolio",
				info: ["addition of train application"]
			},{
				title: "D_D_repo",
				info: ["addition of .gitignore file", 
						"adjustment of file layout"]
			},{
				title: "RollInit",
				info: ["addition of .gitignore file", 
						"adjustment of file layout and package.json",
						"connection to JS and CSS"]
			}
		]
	},{
		day: 73,
		date: "June 12, 2017", 
		projects: [
			{
				title: "Main Portfolio",
				info: ["updates to 100 Day Coding Challenge",
						"update to portfolio content and layout"]
			}
		]
	}
];



$(document).ready(function(){

	console.log("Connected.");
	console.log(posts);



	for (i=0; i<posts.length; i++){
		var challengePost = $("<div>");
				challengePost.addClass("challenge-div");
				challengePost.attr("id", "challenge-div"+i);
				$("#inner-challenge-col").append(challengePost);

		var challengeTitle = $("<h3>Day "+ posts[i].day + " - " + posts[i].date + "</h3>");
			challengeTitle.addClass("challenge-title");
			$("#challenge-div"+i).append(challengeTitle);

		for (k=0; k<posts[i].projects.length; k++){
			var challengeProjTitle = $("<h4> "+ posts[i].projects[k].title + "</h4>");
			challengeProjTitle.addClass("challenge-proj-title");
			$("#challenge-div"+i).append(challengeProjTitle);

			for (m=0; m<posts[i].projects[k].info.length; m++){
				var challengeProjPar = $("<p> "+ posts[i].projects[k].info[m] + "</p>");
				challengeProjPar.addClass("challenge-proj-par");
				$("#challenge-div"+i).append(challengeProjPar);
			}
		}
	}
	
});



// <div class="challenge-div">
// 	<h3 class="challenge-title">Day 12 - April 12, 2017</h3>
// 	<h4 class="challenge-proj-title">Bamazon, Node.js, MySQL</h4>
// 	<p class="challenge-proj-par">Addition of MySQL table "departments"</p>
// 	<p class="challenge-proj-par">Development and functionality to the Bamazon Sales Log</p>
// </div>
// <div class="challenge-div">
// 	<h3 class="challenge-title">Day 13 - April 13, 2017</h3>
// 	<h4 class="challenge-proj-title">Blog-Personal-Portfolio</h4>
// 	<p class="challenge-proj-par">Updates to 100 Day Coding Challenge and start of Blog Post #2</p>
// 	<h4 class="challenge-proj-title">Personal-Portfolio</h4>
// 	<p class="challenge-proj-par">Changes to portfolio style sheet to add functionailty and compatable styles across all pages</p>
// </div>










