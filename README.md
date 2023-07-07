Date-abase
This is a project with a mission to connect nerds with their dream "programming" partners ;). users will be able to create an account and dating profile by answering a few important questions to determine your best match. You can browse other people's profile and if you like the look of someone try matching with them and see if they reciprocate. If you end up lucky you'll be able to chat.
Deployment Link
Getting Started/Code Installation
Clone the back-end repository
git clone https://github.com/maxim-pre/Date-abase-backend.git

Navigate to this repository on your machine then run the following commands to install the project dependencies and start the development server.
npm install
nodemon server.js

Clone the front-end repository
git clone https://github.com/maxim-pre/date-abase-frontend.git

Navigate into the front-end repository on your machine and run the following commands to install all the dependencies and start the app.
npm install
npm run start

Timeline
Thursday (Afternoon, design and scoping)
Friday (All day)
Saturday (No obligation but working allowed)
Sunday (No obligation but working allowed)
Monday (No obligation but working allowed)
Tuesday (All day)
Wednesday (All day, MVP due)
Thursday (All day, refactoring)
Monday (9am check ins and final changes, 10am project presentation)
Group planning
Our Mission
Connect nerds with their dream "programming" partner ;)
Team Goals $ Values
MVP first
Agile working
Open Communication
Learning together
Team Communication Preferences
Breakout rooms in pairs
Slack messages at any time
Lunchtime synchronised pulling and merging
end of day review
Approach
Backend first, break into 2 pairs and work on different parts of the backend (use Postman to verify
Then change the pairings and repeat for the frontend
Technologies Used
Stack
MongoDB
Express
React
Node.js
Tailwind CSS
Npm Packages
Mongoose
bcrypt
passport
react-modal
react-icons
Other technologies
cloudinary
Vscode
Git
Heroku
Netlify
Technical Requirements
Client (Front End)
Have a working, interactive React app, built using npx create-react-app client
have a minimum of 6 components
use only react for DOM manipulation
Consume data from you API , and render that data in your components.
Utilise React Router
Authentication!
Server (Back End)
Have a working generic router actions for CRUD using Express, Mongoose and MongoDB
Have at least 2 modals
Have full CRUD on at least one of your models
Authentication!
Styling
Use flexbox or CSS Grid layout
implement responsive design on 2 screen sizes (including desktop and mobile)
You can use a CSS framework if you want to.
Deployment
Deploy to MongoDB database to MongoDB Atlas
Deploy the back-end via Heroku
Deploy the front-end via netlify
Planning

View Schema diagram here:
https://excalidraw.com/#room=9c9f4fc8e1279bd72d46,vo3AP7_F2bYc7GiY1E9DCQ
View wireframes here:
https://xd.adobe.com/view/4cc19f9e-36f6-404a-8564-083fd55380cd-1992/?fullscreen&hints=off
User stories
MVP
As a user I want to create an account so I can create a personalised experience
As a user I want to create a bio so I can show potential partners what I’m like
As a user I want to edit my bio so I can keep it up to date
As a user I want to answer survey questions so that the website can match me with people that have similar interests.
As a user I want to specify my gender and which gender(s) I’m interested in so I only see partners who are mutually interested in each other
As a user I want to browse other users’ profiles so I can learn more about them
As a user I want to select my favourite users so I can express my interest in them
As a user I would like the option to select or reject any profile I want
Beyond MVP
As a user I want to be notified when someone favourites me so I can see if we are interested in each other
As a user I want to message users I have matched with so we can arrange a date
As a user I want to be notified when I have favorited someone and they have favourited me, so I can know we are both interested in each other
As a user I want to upload a photo of myself so other users know what I look like
As a user I want to get some helpful chat up lines so I can break the ice with my date more easily
As a user I want to see only the users near me so I can meet them without travelling too far

Build/Code Process


Day 1 : We started initialising the backend and setup the schemas for the users (which included basic info for a user such as firstname and lastname).We set up a connection to mongodb. On my computer I had an issue with mongodb, so me and one of my teammates decided to pair code on his machine. After that we used a postman to check that post requests were working. 
Day 2: I worked on the front end with another team while the other teammates continued to work on the backend and we set up the landing page with a lot of components. We set up the login, matches, signup and we also set up the navigation(using usestate from react) for the app. 
Day 3: My teammates coded and worked on a lot of the components we set up and we finished the login and we broke into two groups. Me and my teammate set up the conservation where we used mongoose and added some extra basic things such as timestamps while the other teammates worked on the CSS of the app.
Day 4: We worked on the bio section for the users which is where the person specifies their preferences in their gender or basic information as well as people they can match with. This was done by setting up many functions. My teammates set up the photo uploads using cloudinary which were imported into the usercard.js.
Day 5: We set up authentication using passport and style the app with CSS.


Challenges
I handled the project deployment on my own at the last minute before the deadline. I wasn't aware that heroku doesn't recognise for a while.Heroku must be provided its own set of configuration variables rather than env variables.
The pull requests. Bugs were occasionally retrieved from the upstream repository. This was a significant time waster because, until we could fix it, the entire team's progress would be halted.
Wins
I am pleased that our team worked seamlessly together. Throughout the project there was amazing communication, collaboration and clarity between the team members. This made debugging, pair programming and resolving merge conflicts a breeze
I am happy with my implementation of authentication using postman.
Key Learnings/Takeaways
This was my first project where I've built an API with Express and I found using the library very intuitive and enjoyable.
Working with a cloud service to store images
Future improvements
The UI could be improved a lot
I would like to add an algorithm to match users. Currently users can be matched with anyone in their gender preference.
I would like to add the ability for users to have a live chat someone they've matched with

