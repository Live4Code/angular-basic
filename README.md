### Filters in Angular

We have seen many sites offer data filtering features. E-commerce sites allow customers to filter products by price.
Blogs allow visitors to search for posts based on keywords. Allowing users to customize data has become one of the core 
functions for applications. 

Angular's built-in filter (`filter`) can easily achieve data filtering. Filters work direct on the data sent to view from controller, 
only showing those meet the filter criteria. The advantage is that we can change the rules, and the data is updated in real time. 

Filter works similar to the Unix pipe command ( | ). We pipe the data to the filter. It then changes the data in some way, such as  
altering the display format, filtering out unwanted data, and then return the results to show on the web page. 

If the original data changes, filter will automatically triggers and updates the results. We learn how to use filters in this exercise.
