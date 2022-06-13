This is my capstone project for Flatiron School.

This web application currently allows users to create their own account, log in and out, search for locations by name and type, save locations, favorite locations and even integrates google maps.

This project is still in development and many more features will be added as I experiement and learn more throughout my career.

To get this project up and running, create two separate terminals. In the first terminal, first make sure you are in the project's outermost directory, then run the command 'bundle install' to install rails dependencies for the backend. Once this is done, access your second terminal. In this second terminal cd into the 'client' folder. In this folder run the commant 'npm install', this command will install the react dependencies.
Once dependencies have been installed, use your terminals to get the servers running. To do this, go to the terminal that you ran 'bundle install' inside of, in this terminal make sure you are in the project's outermost directory and then run 'rails s', this will get the backend server running. Then, go to your second terminal, make sure you are in the 'client' directory and run 'npm start', this will start your frontend server on http://localhost:3000.

Important: This project uses postgresql as a database. You may have to run additional postgresql commands to get the database up and running. 

Upcoming updates will add additional functionality to the map so stay tuned!
