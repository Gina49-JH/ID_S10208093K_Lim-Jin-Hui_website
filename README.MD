Tracking Expenses Website
The project mainly focus on using an website that allows users to enter their spending information and store in a localstorage where users can see the charts of how much they spend and help them to plan their savings.

Design Process
As a user type, I want to display the charts, so that I can see how much i spend.
As a user type, I want to store my spendings information on a localstorage, so that i dont have to retype again.
As a user type, I want to display different types of charts, so that i can see the difference between each chart.
As a user type, I want to display dark mode, so that i can choose between light or dark mode.

The Adobe XD wireframe file has been included in the project folder.

Features
Existing Features
    Feature 1 - allows users to add new data and display into a bar chart.
    Feature 2 - allows users to store the data into localstorage of the website.
    Feature 3 - allows users to display piechart into a website.
    Feature 4 - allows users to update the data into the chart.
   
New Features:
    Feature 5 - allows users to switch between light and darkmode to the website
    Feature 6 - allows users to scale the website using different devices
    Feature 7 - allows users to delete a specific records in a localstorage.
    Feature 8 - allows users to append the data to the localstorage.    

Features Left to Implement
    Retrive from the localstorage to display the charts.
    sending the data to the email that users specify from the contactpage.

Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

    JQuery
        The project uses JQuery to simplify DOM manipulation.
        link: https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    ChartJs
        The project uses ChartJs API to display charts. 
        link: https://www.chartjs.org/
    Bootstrap v3.4.1
        The project uses Bootstrap to simplify creating template for the website.
        link: https://getbootstrap.com/docs/3.4/getting-started/

Testing
For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:
    Tracking Expenses:
        Go to the "Tracking Expenses" page.
        Try to enter some values into the form and click the new amount button an alert message will shows it has been added sucessfully 
        and shows the updated charts.
        Try to click on the Pie Chart button and it shows a pie charts.
        Try to click on the Bar Chart button and it shows a bar charts.
        Try to enter some values into the form and click the update, add button an alert message will shows it has been added sucessfully 
        and shows the updated charts and updated values into the table for display.
    Contact form:
        Go to the "Contact Us" page
        Try to submit the empty form and verify that an error message about the required fields appears
        Try to submit the form with an invalid email address and verify that a relevant error message appears
        Try to submit the form with all inputs valid and verify that a success message appears.

the project currently only works on a static webiste which the navbar is not working at the moements however the charts and the
button from the trackingExpenses page should be responsive and scale properly. Still in Work in progress build.

there is a bug where when you input your data and click on update, it updated the charts but is on random and might not be accurate yet.

Credits
    for the readme.md template reference from this website https://github.com/immalcolm/interactivedev-readme-template and made some changes to prevent copyright issues. The webiste was using w3school webiste: https://www.w3schools.com/code for both html and css to code the website, jquery and bootstrap v3.4.1 https://getbootstrap.com/docs/3.4/getting-started/ and Jquery https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js

Content
    
Media

Acknowledgements
    I received inspiration for this project from https://repl.it/@Gina49JH/wk0x-jquery-localstorage-obj-v3#script.js
    and https://repl.it/@Gina49JH/wk0x-simplecharts the link refer to the np mel website lecture slide week 07 localstorage
    and 08 (optional) chart powerpoint slides.
