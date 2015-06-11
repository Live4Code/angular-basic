### First Step

The first thing that we need to do is to actually include the AngularJS JavaScript file.

Angular application code has a lot of unique features.

The first is `ngApp`, all applications need this declaration. It is responsible for initiating the project, 
usually in the root directory of Web pages, such as `<body>` or `<html>`. Each Angular Application only allow to initialize once.

The second is `ng-model`, it is a typical usage of angular's famous two way data binding. We have created a variable `yourName`, 
Angular will automatically monitor and update this variable on the page.

Finally, `{{}}` syntax on the page takes care of dynamic updating the value on the web page.

From this simple example, we find following features:

**1.** Angular is based on HTML, we do not have to invent new expressions or template languages.

**2.** Dynamically update. If you have used other Javascript frameworks, such as jQuery, Backbone, Ember ..., you will find two way 
binding in angular is very simple.

Let's learn Angular -- the most popular frontend Javascript framework!