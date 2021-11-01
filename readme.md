# Project 2
#### By NAME

## Project Summary

Tell me what are your building and what tools are you using?
I am building a bag purchasing app. This will contain images of bags. Users will be able to log in click on different bag images to see them in more detail. The user could put bags in a cart and either purchase or delete items from their cart.

## Models

List here any models in your app and their properties
Images of bags, with prices, color, and material

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /segovia | get | get all todos (index)|
| /segovia/:id | get | get a particular todo (show)|
| /segovia/new | get | display a new route with items that will be purchased (new)|
| /segovia | post | post new item on the cart page (create)|
| /segovia/:id/edit | get | edit the cart page (edit)|
| /segovia/:id | put | update the new cart page (update)|
| /segovia/:id | delete | delete an item from the cart page (delete)|

## User Stories
The user is expecting to see clear images and scroll through them to see all the items on the Segovia site, They can also click on an image to see more details and where they can click a button to add the item to a cart. They should also be able to delete an item from the cart. And make a purchase.
## Challenges

- I hit my first challenge trying to populate the images on the page. I keep forgetting to address the loop in the index route .The solution: res.render("segovia/index.liquid", {segovia1: segovia})

- Second challenge is figuring out if I need a new.liquid, when all I need is a button on the show.liquid to add the item to the shopping.liquid page.

-Next challenge was connecting the styles.css to the layout page. I decided to just move forward by adding a styles tag to the layout.liquid page and styling from there. I was missing the app.use(express.static("public")) necessary to connect the public folder and its contents to the server.js

## List of Technologies

javascript
heroku
imgur.com

## Bibiliography

This page assisted me with the creation of the hamburger menu:
https://www.youtube.com/watch?v=dIyVTjJAkLw&ab_channel=codeSTACKr
