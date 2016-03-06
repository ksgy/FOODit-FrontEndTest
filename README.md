FOODit-jsTest
=============

## Getting started

1. Fork this Github repository.

2. Clone your new repo.

3. Install Node.js and Bower dependencies.

    ```sh
    npm install
    ```

4. Run `grunt serve` to serve up your files using a local Node (Connect) server. A browser window will open pointing to your `index.html` file. Any changes you make will be reflected in the browser immediately (without you having to hit refresh all the time). You will also get feedback about JSHint issues and test results in the terminal as you go along.

5. Commit/branch your stuff as you would normally. When you're finished, push your code to your Github repo, and drop us a link to it in email.

## What we expect from you

The frontend task involves building up the base angular app to match the mobile designs included in the repo.
The solution should take into account: 

- This is a mobile design which would be accessed by various devises/browsers.

- The contents of the basket will be retained between browser reloads.

- It should be as true to the designs as possible, but candidates should feel free to add anything that improves the flow/design.

- A solution should show an understanding of the problems involved and make use of the tech stack to solve them.

- We prefer code that is modular and has tests.

![Design overview](/design/mockups/menu_design--overview.jpg?raw=true "Design overview")


## A little guidance

This app was generated using the `generator-angular` Yeoman generator.

It uses AngularJS 1.3

## TODO

[ ] Add SVG to meal-cards 
[ ] Fix closed state of orders overlay
[ ] Add open/close detailed text on meal-card
[ ] Check height of orders-list and add `scrolling` class if needed 
[ ] Add animation to orders
[ ] Add feedback for the user if meal has added to the orders
[ ] Add "Clear" button to orders overlay
[ ] Meals list can in 2-3 columns on tablet landscape

## Bugs

[ ] iPhone / portrait: orders overlay falls apart (might be a flexbox issue)

## Refactor

[ ] Refactor function calls to variables for ng-repeat
[ ] Refactor $scope/service functions to variables to save $digest()/$apply()
[ ] Position price with flexbox
[ ] Error handling for $http calls
[ ] Pagination
[ ] Refactor CSS classes: button mixin, etc.
[ ] Breakdown functional parts to directives
[ ] Unit tests for controllers
[ ] e2e tests
