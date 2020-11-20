Auth Friends

This project utilizes Axios authorization to assign and record friends added to the friends list in the project. 
The POST requests found in the handleSubmit in the FriendsForm file assigns a new friend to the list. When the event is triggered in the handle submit,
a new friend is added. 
Each new friend has a name, age and email assigned to them.
Each item connects to the handleSubmit so they can be added to the newFriend data set upon triggeing the event handler. 
This makes it possible to validate a user before allowing them access to data within an app.

The purpose of this project is to show an understanding of form validation and handling state. It also displays an understanding of
event handlers as a means of submitting form data.


Topics:

React Router
Protected Routes
axios package
AJAX
Promises
Authentication tokens
Project Description
There is an API built that has authentication built into it. The API holds a list of friends and lets you add, edit, or remove friends from that list.

All of the API endpoints (except the login endpoint) are considered "protected", meaning you have to make the request with an authentication token in the header or the API will send back a 401 error.

Take your examples from the guided project and use them to build a more sophisticated application. Have fun!

Once your server is up and running, the URL you'll be able to hit from within your app is http://localhost:5000. You will however need an authentication header on all the calls except the login call.

Take a look at the endpoints that our API has to offer in server.js.

[POST] * to /api/login: returns a token to be added to the header of all other requests. Pass in the following credentials as the body of the request: { username: 'Lambda School', password: 'i<3Lambd4' }
[GET] to /api/friends: returns the list of friends.
[GET] to /api/friends/123: returns the friend with the id passed as part of the URL (123 in example).
[POST] to /api/friends: creates a friend and return the new list of friends. Pass the friend as the body of the request (the second argument passed to axios.post).
[PUT] to /api/friends/:id: updates the friend using the id passed as part of the URL. Send the an object with the updated information as the body of the request (the second argument passed to axios.put).
[DELETE] to /api/friends/123: removes the friend using the id passed as part of the URL (123 in example).
 
