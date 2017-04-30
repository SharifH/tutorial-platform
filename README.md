# tutorial-platform

## What is this platform
The tutorial platform is a product designed through collaboration between Esther Hersh, Sharif Al-Hadidi, and Alexia Kyriakopoulou. The platform is a tool for beginners to learn more about creative coding through the use of tutorials. The platform allows users to branch off of the tutorials and experiement with altering the code in a unique and personal way.

The platform is designed to allow for users to learn in a fun and creative way. Anyone can add new tutorials for any language and topic they would like. Simply duplicate our template and add in your slides with some minimal customizations you have a fully functioning tutorial.



## How to create your own tutorials
We have created a template that you can customize and add your own content to in order to create new tutorials through the platform. We allow for users to create a tutorial in any programming language that they choose. In order to do this you would first duplicate the editor-template.html file and rename with the tutorial desicription(eg. bouncing-ball-p5.html or pinwheel-css.html) this allows for a clearer consise descriptor for future tutorials. The tutorials will go in the tutorial folder along with the correspoinding language folder.

### HTML Template

	<div class="slideshow-container">

                <div class="mySlides fade">
                    <div class="numbertext">Slide Numbers eg(1 / 28)</div>
                    <h1>Description &amp; Number eg  (Setup() and Draw() (1/2)) </h1>
                    <p>Instructions (The template code contains two blocks, or functions: setup() and draw(). You can put your code in either place and there is a specific purpose for each. The code in setup() is only run once. The code inside the draw()function runs
                        continuously from top to bottom until the program is stopped.)</p>
                </div>
                <div class="mySlides fade">
                    <div class="numbertext"></div>
                    <h1></h1>
                    <p></p>
                </div>

            </div>
            
The div that contains the class "numbertext" is where you would declare how many slides you have in the tutorial.

The h1 tag contains the description of the slide and what you would be doing in the tutorial.

The paragraph would have the instructions on how to complete the following step in the tutorial.
            
### CodeMirror
	//CodeMirror code block stuff
	

## What has been completed
In this version we have found a way to create a tutorial site that has fully functioning tutorials, slides, editor, and a editor viewer. Using these tools we were able to populate the project with three tutorials that we plan on expanding upon in the near future. We have also provided a template in order to add more tutorials to the platform by editing the template provided.


#### The version we have created is currently only a very early stage prototype and is still missing a lot of the desired functionality.




            
## What we still need to do

We want to add a lot more functionality to the platform before being completed

#### On User Side
+ Adding User Log-in to track your progress and allow for you to return to the last place you left off
+ Adding a user experiment collection page with version control
+ Create a verification aspect to the editor to ensure that the users are properly completing the tasks before moving on.
+ Create an override for the tutorials to allow users to bypass the check.

#### On Contributer Side
+ Create Collaborator page.
+ Create the tutorial creation page.
+ Create a interactive tool for the collaborators to add slides dynamically through the application.
+ Create a view for users to vote on tutorials completion.

#### On Community side
+ We want to add a proper backend to the project to better serve the content to the users and to improve the functionality for the collaborators.
+ We would hope to move everything to a javascript templating version for the views which has not been completed yet.
+ Create a voting system
+ Improve the searching system
+ Improve the load speed of content and accuracy of tutorial functionality

