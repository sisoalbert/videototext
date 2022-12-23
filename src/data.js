const dataFile ="{
  "text": "hey what's going on guys so lately I've been dabbling with open Ai and some of the tools that are available which are really incredible so you probably heard about the chat GPT model that that has been trained to basically have conversations and you can ask all types of questions including coding questions and it gives you some really great in-depth answers and you can also make references to you know things you've already talked about it's really cool and I'd suggest people try it out but that's not what this video is about what I want to do in this video is create a web app that we can enter some text into and it's going to generate an image based on that text and we're going to be able to do that using open ai's Dolly system which can as you can see create realistic images and art from a description in natural language so if you put like give me a frog on a computer drinking coffee it'll generate that image and it'll create it from you know from scratch using machine learning and AI so this is the the app we're going to build then we're using node.js so we're going to have a node back end where we use the openai node package and then the front end will just be HTML CSS and vanilla JavaScript and if you want to use a framework of course you can do that but if we put in here what did I say a frog on a computer drinking coffee and then you can choose a size as well so let's click generate and it just takes a couple seconds and there we go so we get enough frog drinking coffee on a computer if I click generate again it'll give us another one something completely different and it's not like it's going out and finding this image on the Internet it's it's creating it from scratch based off of machine learning and AI so really really cool so let's go ahead and jump into vs code or whatever editor you're using and I'm going to open up my terminal now you do have to have node.js installed so if you don't have that just go to nodejs.org and download it and then we're going to run npm and net Dash Y which will create a package.json file so as far as the dependencies we need we want to install Express because we're going to create a route and so on and then we want the open AI library and then I'm also going to install dot EnV for our environment variables and one of those environment variables is going to be our API key which I'll show you how to get in a few minutes now I also just want to install as a Dev dependency node mod just so we don't have to keep restarting it and then let's go into our package.json and I'm just going to create a start script so set that to start and then let's do end uh npm node index which will run the index file that's what I'm going to call it and then let's go ahead and also create a Dev script and that will run node mon in our index file okay so now we'll create that index file so index.js and then for now I'm just going to do a console log123 and then let's run npm run Dev and that should run node Mon and you should see the one two three all right so we can clear this with Commander control C and now we can start writing our code so we're going to start off by just creating a very simple Express server so let's bring in let's say const Express and we want to require Express and we'll bring in dot EnV as well so let's say dot e and V but we do have to call the config method that's how this package works so let's say dot EnV and then we can create a DOT EnV environment let's actually do that now so we'll say new file Dot and V and let's put our port in here for now which I'm going to set to 5000. and then to get our Port let's set that to process dot EnV and then we want to get that Port value or if that's not there then still 5000. all right now let's initialize Express so we'll say app equals Express and I know a lot of you guys already know this stuff but I I like to do things from start to finish and explain things as I go along so I mean you can skip around I will put timestamps in so we want to just start let's say app dot what am I doing start I have taught listen and let's pass in our port and then have a function just do a quick console log and we'll say server started on Port and then we'll put our Port variable in there all right so just with that we should be able to run npm run Dev okay so that starts the server I'm going to stop that for a second because I want to add in our API key so we're going to call this open yeah let's call it open AI underscore API underscore he and we where you can get that is at beta Dot openai.com and then over here of course you have to log in create an account login and then view API keys and here you can create your keys all right so I'm going to just grab the one that I've been using see I have that all over the side here and you know don't use this key because I'm going to delete it after make sure you create your own so we'll save that and now we should be able to run the server and let it run with nodemon so as far as the structure you could put everything in the index.js but I don't I don't like to do that I don't want to be too cluttered and messy so I'm going to make it kind of scalable so if you do want to add more stuff from open AI you can pretty easily so what I'm going to do is create a routes folder and in route so we're going to have a file called open AI route dot Js okay and then back in the index.js I'm going to connect that so let's say app.use and for the route slash open AI I want to require that that file so we want to go dot slash routes slash open AI route so in the routes file let's bring in Express because we need to use the router so we'll say require Express and then let's create the router so we want to do that with Express dot uppercase router and then we want to make sure we export that so module exports router and then the only route we're going to create is going to be a for a post request so let's say router.post and it's going to be slash generate image so ultimately that what we want to hit is going to be slash open AI slash generate image and we're going to have a controller function but for now I'll just put a regular Anonymous function in here so let's say request response and for now we'll just do a res dot status to uh 200 and Jason and we'll just pass in an object with let's say success and set that to true okay so I'm gonna make a request now and I'm using Postman now if you want to use a different tool that's fine but you just have to be able to make post requests and I'm gonna pass in I actually already have it right here so again it's going to be localhost 5000 open AI slash generate image and you should see a 200 response and success true so now like I said I want to have a controller function so let's create a new folder called controllers or no yeah I don't want controller let's call it controllers okay and then inside that will create a new file and let's call that open AI controller.js all right so in here this is this is where we're going to do we're going to use the open AI library and so on so so let's start off by just creating our function I'm going to call it generate image and I'll use an arrow function and this is going to be a synchronous because the openai library is going to give us a promise so let's say async and let's pass in our request and response and then for now I'm just going to go ahead and grab this paste that in there and we have to make sure that we export this so module dot exports an object with generate image all right then we can go ahead and bring that in here say const we're going to destructure generate image from from the let's go out one level to controllers and then open AI controller and then instead of this Anonymous function here I'm going to replace that with generate image and we should get the same response good all right so now that we're done with that craft we can start to use this Library so if I go to the GitHub page right here basically there's a whole bunch of stuff you can do like this one you can see they're calling create completion the the method we want to call is create image but this stuff is all the same setting up the config so I'm just going to copy that and then let's see let's just let's just do this so then we're gonna go ahead and put that let's put it above the generate image and then you could you know you can create other functions if you want to do other things so this is where we're actually passing in our open AI key so make sure that this matches whatever is in your dot EnV this right here okay make sure you have the correct key so in the generate image I'm just going to cut this response for now and we're going to do this inside of a try catch and we want to create or get a response and put it into a variable so the way we do this is we await on open AI Dot and you can see there's a ton of methods we're going to use create image and that takes in an object and we need a couple things here so one is the prompt that's going to be the text that you want to describe your image and ultimately this will come from a form from the front end but for now I'm just going to put in let's say polar bear on ice skates or whatever you want to put and then we have an N value and what that is is the number of images so I'm going to hard code that to one if you want you can have a you know an input on your front end where they can select multiple images and you can return multiple images but we're just going to do one for this so then we also need the size and for that I'm just going to choose 512 by 512. so and ultimately it from the form they'll select small medium or large and we'll have a conditional that will set it to a certain number of pixels but for now I'm just going to hard code this all right now after the response we're going to create image URL because that's ultimately what we're going to get and we can get that from the response dot data and then dot data again which is an array so we want the first item in the array and then dot URL okay so that'll give us the URL and then as far as what I want to respond with let's go ahead and paste that in and we just want to add to this I'm going to call this data and set that to image URL all right now as far as the um the error goes you know if something goes wrong let's go ahead and set uh 400 and set this to false and I'm going to put message or error or whatever you want and I'm just going to say the image could not be generated and basically what what's going to fire this off the most the reason you'll get an error the most is because of violating the content policy so for instance if you type in like people having sex or something like that it's not going to work it doesn't it doesn't do that stuff at least without setting some kind of flag or whatever I'm not really sure but I know if you try to get like porn and stuff you're not gonna it's not gonna work so you're gonna get an error of 400 error all right now I also want to just console log any errors and if we go to the docks here and we go to image generation so basically this is what we're doing right now this node.js is also python now in addition to adding or generating images you can also edit existing images like you can see here you can upload or you can use a mask and then add something to that image which I think is really cool we're not going to do that but that is possible you can also create different variations of images but if we go all the way down you'll see for error handling I just want to grab this right here because this will tell us exactly what's wrong on the front end they'll just see you know the image can't be generated but we want to know as a developer what is happening so I'm going to paste that in there all right and I think that should do it as far as I mean we should be able to to make a request and get a response with a URL so let's jump into Postman or if you want to use something else that's fine and uh let's see yeah we'll just go ahead and try this out now it's going to take a couple seconds that's actually a good sign and there we go so we get success true and we get this URL so I'm going to command click there we go we get a freaking polar bear on ice skates if we do it again and sometimes it's like a cartoon sometimes it's like 3D generated so they're they're all they're so different like you can get something that's so different um so yeah at least we have our back end working now we do of course we don't always want to look for a polar bear on ice skates we want to be able to take in body data from the request so in order to do that we need to add a little bit of middleware so let's go here let's say enable body parser passer pasta that's how I would say it off off video try not to you know let too much of my accent out so let's say app.use and we want to pass in here Express dot Json and let's also do app.use and then Express Express dot URL encoded and we're just going to pass in extended false into this so extended false okay now we should be able to accept body data which will come in through request.body so back in our controller what we'll do is let's see right in the generate image I'm going to destructure from request.body and basically we want to be able to take in here a prompt which is going to be the text and then also the size now the prompt that's easy we can just you know get rid of this just do that and that's going to use whatever this is passed in from the form it's going to use that here now for the size I want to add a conditional because instead of choosing pixels I want to just choose a small medium or large so I'm going to do this in a shorthand and use a ternary so let's say image so size and we'll set that to let's say if size is equal to small then we want this to be let's say 2 5 6 times 256. okay uh and then if it's wait a minute no we want to do L sometimes these long ternaries confuse me so else we want the size if the size is equal to medium then we want this to be let's say 5 12 times 5 12. else then we want the large which is going to be 1024 times 1024 all right so that should do it now for the size we can just replace that with uh image size all right so I think that should do it let's save and then let's go back to postman do one final test by adding in let's go to body and then form URL encoded or raw Json if you want and we want prompt so prompt is going to be um what should we do let's say we'll say man on the moon and then let's do the size we're going to do medium so we'll go ahead and send that and let's go ahead and check it out there we go so I get a man on the mood sitting in a bucket all right cool so our back end is complete so now we just need to do the front now real quick I'm just going to do a quick get let's say get a net and I'm just going to add a get ignore you don't have to do this but I'm just gonna and say npm underscore modules and also the dot EnV I'll probably put like a DOT EnV example or something in the repo so let's come down here and get add all and then get commit and I'm just going to say this is the open uh open AI back end all right so let's run npm run Dev again now like I said if you want to use a framework you can do that but I'm just using vanilla JavaScript so what we're going to do is create a folder here called public and we want to make that the the static folder so we can just have like you know an HTML file we can have our CSS and so on so let's add the middleware for that I'm just going to say Set static folder and we can do that I'm actually going to excuse me I'm going to bring in the port uh port with I'm gonna bring in the path module so path equals require path and then let's come back down here and we're going to add our middleware so app.use and then Express dot static and then path dot join double underscore dur name so from the current directory and then into public that's going to be our static folder so now in our public we can just create an index.html let's put a boilerplate in there and I'll just say this is um I guess open AI image image generator and let's just say hello just make sure this works so now I should be able to go to the browser and go to localhost 5000 and we should see hello is this smaller than usual hmm okay so let's see as far as the the CSS goes I'm gonna paste copy and paste that in because that's just obnoxious to write so in public let's create a folder called CSS and then in CSS we're going to create style.css and I also have a spinner when we when we submit the form you see we had a spinner so I'm going to put that in a separate CSS file okay now the spinner I'm going to paste that in and you can get this from the the repo in the in the description this is a spinner I found on code pen so I want to make sure I put the the link to it in there I did change a couple things around basically we want to add a show class if we want it to display and just remove the show class if for not to display so we'll save that and then I'm going to grab the style CSS okay and just to go through this real quick we're just we're using the Poppins font we have a reset we have the primary color as a custom property body styles the nav bar then we have the Showcase which is the big yellow area with the form showcase form showcase input form button and then the image area where the image shows as well as the message if there's an error all right so pretty simple and if you want to have a completely different UI then go for it but I just wanted something really really easy and then as far as the HTML I guess I guess I'll paste that in I was going to type it but it that's you guys aren't here for HTML so I'll just paste it in and go through it it's pretty simple so again we're just including our style sheets we're including the Javascript file and the head with defer and then we have a header with the nav bar the only link is the link to the docs the open AI Docs and then in the main area we have a section with a showcase that has the form it has an input with the ID of prompt so that's going to be our text we have a select with the ID of size which is going to be small medium or large and then we have the button and then we have the section for the image basically just an image with an empty source and an H2 that has nothing in it so we'll insert the insert stuff in there from the JavaScript all right so let's save that so if we come back over here and reload we should see our UI now since we're you know we're not using react or anything like that or any kind of build tool so we do have to reload the page every time we make changes on the client here which kind of sucks but and there are ways around that but I don't really want to get into that so let's um let's go to our front end JavaScript which I didn't even create yet so in public we want a folder called Js and njs we're going to create a main.js file so the very first thing we'll do is add our event listener to the form so let's say document dot query selector and I'm going to select the form which I believe has an ID of image Dash form and let's add an event listener on to that we're going to listen for a submit and when that happens we're going to call a function called on submit okay so let's put that at the bottom and then we'll create a function say on submit pass in our event object and we want to prevent the default Behavior and then let's get the data from the form so we'll do prompt and let's say document Dot query selector and we're going to select the ID let's just close that up I'm going to select the ID of prompt and we want the value because that's an input whoops dot value so I'll copy that down and we also want to get the size so there's an ID of size and set that to size all right and then we'll just have a quick quick validation here with a basic alert so I'll say if prompt is equal to nothing then let's just do an alert if you want to create a custom alert that's fine but this is fine so please add a or we'll say just please please add some text and then return all right and then for now we'll just do console log and success just to test this out so far so if I come over here we remember we have to reload if I try to submit with no text I get an alert if we do frog on a computer drinking coffee and submit we get success actually we should see if just make sure we get our prompt and size again we have to reload all right cool so everything's working so far so now we're going to have a separate function called generate call it generate image request and that's going to take in the prompt and the size so we'll create that down here now this has to be asynchronous so let's say async function and generate image request takes in prompt and size all right now I do want to uh I want to show the spinner actually that's do we have yeah we paste it in the HTML so we must have it so we have a div with the class of spinner if I were to add a class of show manually and come over here and reload you can see now it shows so we basically just have to do that with our JavaScript when we want to actually show it so let's create a function underneath here two functions so we'll say function show spinner and we're going to document dot query selector class of spinner and we're going to add a class so we can use classless dot add and add a class of show so that'll show it then we'll go ahead and just copy that down and let's say remove spinner and then whoops I just want to remove the show class all right so when we generate we're going to go ahead and do a try catch and the first thing I'm going to do in here is show the spinner okay then I want to make the rest request so we're going to say const response set that to a weight a fetch request the endpoint is going to be slash open AI slash generate image okay now we do have to add in and some options here one being the method because we want this to be a post request and then let's do for headers we're going to set the content type so let's say content Dash type and set that to application slash Json all right and then under the headers we're going to have the body now the body is going to be the prompt and the size in an object but I do want to stringify it so we're going to say Json Dot stringify and then we'll pass in an object with the prompt so whatever is passed in the form prompt and size all right so that's going to be the response now as a lot of you know with the fetch API if we get like a 400 then that doesn't automatically throw the catch so we have to check for that so right after the response which ends right here I'm going to check and say if and there's on the response object there's a value for ok and we want to check to see if we're not okay because that'll be false if we get a 400 response and not a successful one so if we're not okay then first of all we want to remove the spinner or that will just stay there and then we want to throw a new error and again I'm just going to have the message of that image could not be generated all right and then let's see we'll go after that if okay so this is if there's a problem if there's not then we can get the data so we'll say const data and we want to await on the response whoops on the response dot Json okay so that should give us our data so for now let's just console log the data and then as far as down here in the catch I just want to Output the message so let's say document Dot query selector and there's an H2 that has a class of message MSG so we're going to grab on to that and we're going to say text content equals the error which is going to be this here okay if something goes wrong and then we're going to want to clear both the image well we can do that after I guess so for now let's just test it out see if we can get the data so I think yeah I think we have everything oh one thing we want to do is make sure that once we get the data we've removed the spinner because this will remove it if there's an error but we want to make sure we remove it here as well all right so let's try this out make sure you reload search for our good old frog drinking a coffee generate we get our spinner for a few seconds it's making the request and there we go we get success and data we get our URL all right cool so now instead of just console logging we want to put it in the Dom right so I'm gonna we'll just console log I'm sorry comment that out the console log and let's say const image URL and we're gonna get so it's going to be data which is the the entire object but in that object remember we have we have a data attribute here which is going to be the URL I probably should have set that to something else because this is kind of weird data.data but it's fine so we get our image URL and then let's grab the image ID so query selector and there's an ID of image and then let's uh let's go ahead and set the source to the image URL that we just got from the back end yeah and then we'll remove the spinner and then what I want to do is just make sure up here once we submit we want to clear the message and the image so that'll be like the that'll be the first thing we do so let's say document Dot query selector and we want to select the message so let's say dot MSG probably should have made that an ID kind of bothers me but whatever it's fine so text content and we're going to set that to nothing and then we also want to get the image so that's going to be the ID of image and let's set the source to nothing all right so I think that should do it let's make sure we reload here and generate and there we go and that's going to be 512 by 512 because I chose medium let's try something else we'll say cat with blue eyes and a hat and let's make that one large and large images seem to take a little longer so there we go cat with blue eyes and a hat now obviously the more training data it has the more you know the more spot on it's going to be where you start to run into issues like if I type my name in here there are images of me on the internet but not a lot and it takes like all the images and trains even just logos and all kinds of stuff so let's see get some pretty weird results okay so this is like the tenth time I've seen food and it's always something that's related to bread so I think it's it's actually searching for bread instead of bread um what if we do like Brad travesty person web development I'm kind of treating it like a search engine which isn't really how this works all right so I guess I guess so I don't know uh if we try let's say Google like a company that's well known because companies and names and stuff it seems to have trouble with all right so it doesn't actually say Google but it comes close with the colors and you know the lettering and stuff so yeah I mean what's cool is that these are these are being created right these aren't images that's no person actually went in and created this it's being created by the Machine by code which I think is really neat um and I think that it's it's going to get better as time goes on but let's try something that's kind of easy again we'll say I don't know a cow dancing on a rainbow while juggling so a bunch of descriptions in there see how close it comes all right so that's pretty good so the cows dancing on a rainbow while juggling I think that's pretty good so that's it guys hopefully you enjoyed this and again I would encourage you to just mess around with some of the open AI tools and it's really cool and you know really just Cutting Edge a lot of this stuff so thanks for watching and I will see you next time"
}"