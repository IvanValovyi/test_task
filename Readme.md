# Test Task

## Install all necessary packages

To install all packages, run the "npm i" command at the command line:

![image](https://user-images.githubusercontent.com/82437628/181091769-b5c5b5cd-49f9-4552-81fa-5532179865e6.png)

## Adding an ".svg" image

 To add a ".svg" image to the site, add it to the "./images/svg" folder, then run the "gulp svgsprite" command, now you can use the "spite.svg" file to display your image.

 Example of using the "sprite.svg" file:

 ![image](https://user-images.githubusercontent.com/82437628/181092157-1904c747-8498-49c1-bb65-10bd0513edba.png)

## Adding a ".png, .ipg, .jpeg" image.

To add a new image to the site, you need to add it to the "./images/ordinary" directory, and then run the "gulp compress_images" command in the terminal.

 ![image](https://user-images.githubusercontent.com/82437628/182105354-ec1a6588-d106-4d16-aac4-34478edf8257.png)

 After executing this command, your compressed image will appear in "./images/compressed" folder, now you can use it.

## Using SASS

 To change the styles of the site, run the command "sass --watch sass:css", then you can change or add ".sass" files in the "sass" folder, if you create a new file in the "sass" folder, you must import it into file "main.sass".

 Example of adding a ".sass" file:

 ![image](https://user-images.githubusercontent.com/82437628/182103847-ec523d25-0a6f-451c-920e-100fd2181181.png)

 ## Creating a production version of the site

 To build a production version of the site, run "gulp build" in your terminal:

 ![image](https://user-images.githubusercontent.com/82437628/182102665-51deb8d0-384d-4819-86b5-de9a5f956088.png)