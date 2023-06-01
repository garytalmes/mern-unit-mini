# Mini Project

You task, should you choose to accept it, is to create, from scratch, a MERN stack application. Some of the work has been done for you. You'll need to check ALL files though to find all the TODOS. Some files you'll need to create from scratch.

Here's an overall look at the work involved:

### 1. Create the following models 

**User**
Fields: fname, lname, email, password 

**ToDoItem**
Fields: item, userId (connected to user model)

You'll need routes/controllers for the following:
     
- Create a new user (w/ password encryption)
- Authenticate a user via login 
- Verify the user throughout the site 

- Create a new todo item associated with the logged in user
- Get a list of all items 
- Allow the logged in user to delete an item 


### 2. Create the React client environment, using React Router for navigation.

It should have these pages:

- Home page:  lists all todo items IF user is logged in
- Add A To Do Page:  user must be logged in 
- Signup Page
- Login Page
- Logout Page 

### 3. Create seeders for 3 initial users, and 2 existing ToDo items per user
