### Create Directive II

In this exercise, we create a pagination directive, to learn how to use the `link` phase and inject `$scope` in to directive.

Pagination widget is very common in web pages about search results, forums, blogs and so on. In this exrcise, we implement the logic 
related to the pagination widget itself (lik change pages, show current active pages and display all pages). 

Different from the button directive, pagination reponses to user interaction, and itself has several $scope varaibles, and need to 
export them to the actual page content.

The pagination directive need 3 varaibles: 

  1. numPages: total page numbers
  2. currentPage: the current active page
  3. onSelectPage: method triggered when user click another page or the previous/next button

Notice the directive has a `scope` declare all these variables. The `scope` block is exposed to the parent controller. So controller 
knows how to deal with the actual content when the page number changs.

The difference among `=`,`@`,`&` and how to use `scope` block will be explained in a later exercise.

The `template` is a string of the actual HTML content of the directive. When the directive is rendered, its content will be replaced by 
the template content here.

Lastly all the actual functionalites all implemented in the `link` function. This is where we add custom logic and user interaction to our 
directives.

Notice the `link` function has a `scope` parameter. It behaves the same as the `$scope` for the controllers. We can use the 3 exposed 
variables defined in the scope block and add other variables if necessary.
