setup for the nextjs
upgradegation
features
Footer- Addimg the new footer component
Routing
Next.js has a file-system based router built on the concept of pages.
When a file is added to the pages directory, it's automatically available as a route.
The files inside the pages directory can be used to define most common patterns.
It is basically of two type
nested
index
dynamic routes
Linking between pages
The Next.js router allows you to do client-side route transitions between pages, similar to a single-page application.
A React component called Link is provided to do this client-side route transition
Linking to dynamic paths
You can also use interpolation to create the path, which comes in handy for dynamic route segments. 
Dynamic Routing
Dynamic Routes
Defining routes by using predefined paths is not always enough for complex applications. In Next.js you can add brackets to a page to create a dynamic route
Adding the routes to the dynamic pages using the link component is being done by Any route like /post/1, will be matched by pages/post/[pid].js. The matched path parameter will be sent as a query parameter to the page, and it will be merged with the other query parameters
