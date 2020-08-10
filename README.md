# House of Plants

## Overview

House of Plants is a web application that makes taking care of your plants
easier! It provides a way to track the plants you have at home by adding them
into the application, managing and updating their care, and checking the task
off once it's complete. The application will require the users to create an
account in order to manage their plants. The goal of this application is to help
the user understand what kind of plants they have and provide a list of actions
to grow their plants. This application is supposed to make having plants fun and
accessible for everyone!

### Features

- The ability to create, edit and delete user login information.
- The ability to add, update, and delete plant information.

### Goals

The goal of this project is to provide users with a solution to keep track of
the plants they own and properly take care of them. It's easy to forget to water
your plants but the app is a plant task management system that won't let you
forget!

## MVP

The MVP requirements for the project would be to implementing user login
information, creating, updating and deleting plant information based on the
account information, and implementing the type of plant/care each added plant
requires by adding an actionable to-do list to make sure the plant is being
cared for.

### Backend

- Set up backend file architecture.
- Build a Ruby on Rails server with RESTful JSON endpoints.
- Build a database with 3 tables (users, plants, plant type, plant care)
- Build out the schema to store data information.
- Implement a working generic controller for full CRUD functionality.

### Front-End

- Set up React front-end file architecture (componenets, images, services, and
  screens)
- Create a well-designed front-end experience.
- Utilize CSS or Styled Componenets.
- Connect data from the Ruby on Rails API and render the data in my components.
- Build out the ability to create, edit, and delete user information.
- Build out the ability to create, update, and delete plant information.
- Implement responsive styling.

### Wireframes
![](https://i.imgur.com/pbWkXiK.png)
![](https://i.imgur.com/aDRosAB.png)
![](https://i.imgur.com/aTNbzi7.png)
![](https://i.imgur.com/1k622CQ.png)
![](https://i.imgur.com/8mowWOv.png)

### Libraries and Dependencies

|      Library      | Description                                                              |
| :---------------: | :----------------------------------------------------------------------- |
|       React       | \_Utilize React Hooks to build out a well-designed front-end experience. |
|   React Router    | Use React Router for client-side routing                                 |
|   Ruby on Rails   | Build out a database using Ruby on Rails                                 |
|       Rails       | Utilize Rails to define models for interacting with the database         |
| Styled Components | Utilize Styled Components to style all react components                  |

#### Component Hierarchy
``` structure

src
|__ assets/
      |__ account-icons
      |__ social-icons
      |__ images
|__ components/
      |__ shared/
        |__ Header.jsx
        |__ Footer.jsx
        |__ Buttons.jsx
        |__ Logo.jsx
        |__ UserInfoCard.jsx
        |__ Loader.jsx
      |__ Discover/
        |__DiscoverGallery.jsx
      |__ UserInfo/
        |__UserInfo.jsx
      |__ Progression/
        |__ProgressionBar.jsx
      |__ PhotoBox/
        |__PhotoBox.jsx
      |__ PhotoBox/
|__ services/

```

## Post MVP

In my post MVP, I would like to implement a social aspect of the app where users
can interact with a community of plant owners and share information they've
discovered. I would also like to make it an e-commerce where users can shop for
plants on it as well.
