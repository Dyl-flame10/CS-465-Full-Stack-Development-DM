# CS-465-Full-Stack-Development-DM

# Architecture

## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA)

In this full stack project, I used various frontend development methods including ExpressJS and AngularJS SPA frameworks. The main difference between the two is how the site is rendered. In the Express framework, the pages were built in separate HTML files and rendered server side, sending the full page to the user. The SPA used dynamic client-side rendering, accepting data from the client and returning objects, and changes to the page. 

## Why did the backend use a NoSQL MongoDB database?

Travlr Getaways is connected to a NoSQL MongoDB database for storage. This Data structure was ideal for all the data stored in the application (Trip listings, user info, etc.) as NoSQL databases are non-relational, supporting many different data schemas (Key-value pairs in Travlr's case). 

# Functionality

## How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

Javascript Object Notation (JSON) is a lightweight data format used near universally for data transfer. Javascript itself is a programming language that allows websites to add visual and functional dynamic content to websites. JSON data is used to transfer data between the client-side (frontend) and the server (backend) to update the page as per the requests sent by the user.

## Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One area where I refactored code to improve efficiency is the trips static HTML page to Handlebars to render JSON data from the server, reducing markup rendering. Additionally, the Angular adaptation split responsibilities into separate components and services. This creates modularity on Travlr features, and they can be changed without damaging the flow of the rest of the app.

#Testing

## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Travlr's Express API routes HTTP requests to respective data operations (GET, POST, PUT) such as POST /api/trips or PUT /api/trips/:tripCode. Testing endpoints requires using validated inputs, ensuring a correct status code, and shaping the response. adding the JWT authentication from Node added another level of complexity to protected routes, requiring an authorization header. A web token is required before any protected API calls can be tested.

# Reflection

## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

Working through CS-465 at SNHU has really helped me understand the immense number of factors that go into developing full-stack applications. Developing a functional API, establishing security using JWT, and working with Javascript, Typescript, Express, and Angular were all great experiences with technology completely new to me. This was my first real experience at developing a functional application with a front-end, API, and backend + DB. I still do believe I need to do more to master any of the disciplines this course has taught me but working in this course has greatly advanced my knowledge of project structure and web development principles. 
