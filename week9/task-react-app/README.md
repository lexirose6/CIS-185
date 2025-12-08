# React App
Author: Alexia Wells <br>
Date: 12/3/2025 <br>
CIS 185 HTML, JavaScript, CSS
--------------------------------
## Wanted Outcome
A Task maganer app that allows the user to add items/tasks to a checked list. The list would have the ability to check items off, delete items, and add new items. There would be  a filter option, including the filters: All, Completed, and Active.

## Incompleted
`App.jsx`
`List.jsx`
`TaskInput.jsx`
`TaskItem.jsx`
`FilterButtons.jsx`

## App.jsx
**What I Implemented:** <br>
A form and a fieldset to inlcude the list in. I wasn't sure which I wanted to use so I added both to compare. 

## List.jsx
**What I Implemented:** <br>
useState for items, newItems and count. The id was assined to the count. The idea was to increment the count every time a new item was added and assign it to the id to make sure all id's were unique. <br>
Use of .map was used to iterate through each item in the list and display it in a checked list on the app. <br>
An add button was also added to add a new item to the list.

## TaskItem.jsx
**What I Implemented:** <br>
useState for each property for the Item object since each property would be changing based on the item. Tried to return an item object that contains all the properties needed, so I could refer to it in other files.

## TaskInput.jsx
**What I Implemented:** <br>
useState for input, since I figured the input would be constantly changing. There would only be one input and it would be a textbox at the bottom of the checked list. <br>
I wanted to set each item's text, id, completed boolean, and time it was created to it's defualt. I also used this to set the text property to the input, which would've been used in the List() to store the value. 

## FilterButtons.jsx
**What I Implemented:** <br>
Added all filters (All, Active, Completed) to a list. 
Working on selectFilter, which would filter each item based on the filter selected. I was going to do this through if-statements.
 <br> **Ex:** if the Completed filter button is selected, only show checked items. <br>

## File Structure
`node_modules` <br>
`public` <br>
`src`
<ul>
assests <br>
App.css <br>
App.jsx<br>
FilterButtons.jsx<br>
index.css<br>
List.jsx<br>
main.jsx<br>
TaskInput.jsx<br>
TaskItem.jsx<br>
</ul>

`.gitignore` <br>
`eslint.config.js` <br>
`index.html` <br>
`package-lock.json` <br>
`package.json` <br>
`vite.config.js` 

## How to run the app
`$npm run dev` <br>
in the terminal