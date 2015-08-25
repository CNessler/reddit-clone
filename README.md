Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
http://jeffwhelpley.com/angularjs/
  - integration
  - extensibility
  - simplicity
People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
  - has to parse entire document
  - blurs lines between front end and back end
  -
Is Angular an MVC framework?
  - Yes, it's a model-view-controller framework
  ng-model is the model and {{}} is the view that will show on the page
Why did I say jQuery is "sort of" a dependency of Angular? Does it depend on it or not?!
  - No, it's not dependent but without it Angular fall back to it's own implementation of jQuery
Read the docs for ng-app. What is it and what does it do?
  - it's the directive to auto-bootsrap an application
What does ng stand for?
  - Angular


What does ng-model do?
  - It allows you to capture a value in the model you can later view
What is "dirty checking"?
  - dirty means the ng value has been changed, it is pristine before it has been changed
Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
What are those {{ }} expressions? Are they Handlebars?
  - They specify data binding and will be updated whenever the property inside changes
Explain what 2-way data binding is.
  - It synchronizes data between the view and model -- when the view is updated, the model is updated
BONUS: Research the $digest loop  

What are Angular expressions? How do they compare to EJS/ERB tags?
  - Angular expression are views for the model
What happens when you write invalid code in an expression? What type of error do you get?
  - all of the expression show on thepage
What are Angular filters? Name 4 built-in filters, including one that we haven't used yet.
  - currency, number, uppercase, lowercase, reverse, true
We'll soon see how to create custom filters. What is a use case for a custom filter?
  - if you are going to use a filter multiple times building one would save time and allow for reuse

What is $scope?
  - scope is the application object(the owner of application variables and functions)
What are Angular modules?
  - The Angular module defines an application. The module is a container for different parts of the application.  The module is a container for the application modules.  Controllers always belong to a module.
Why do we pass in $scope as an argument to controller functions?
  - So it knows which key to look at in the scope of that particular controller
In Express, what are angular controllers most analogous to?  
  - local variables in app.js??

Why use ng-src and ng-href?
  - Angular takes some time to load and, while href and src work in angular, they may load before Angular and then take undefined values.
What are directives?
  - they are extended HTML attributes with the prefix -ng
Does ng-class require an object to be passed in?
  - no but if you pass it one the key will be implemented to each element that evaluates to true
What order does an ng-repeat display items in?
  - any order??????
How does ng-repeat handle duplicate data?
    - it doesn't allow for the handle of duplicated data
Explain in as much detail as you can what happens when you click the button. Why does number update in the template without us telling it to?
      - When I click the button the method pickRandomNumber() is called and executed on the number, which is defined in the controller.  
