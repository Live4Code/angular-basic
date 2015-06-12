### Share Data Between Controllers

We know controllers <em>control</em> the DOM element it is defined on. Then how to share data between two controllers on the page?

Why share data between controllers? Imagine we have a music website, on the website one area is responsible for displaying the playlist, 
and another area is responsible for displaying lyrics. Obviously these two areas need to share the song being played.

Each `Controller` is given the song, and do something with it. Angular has a component to store shared data -- `Service`.

The most basic form of service is called `factory` pattern. To use a factory, we inject it when initializing a controller. 
So by referring the same factory, controllers can share data.

In this exercise, we learn how to create and use a factory.