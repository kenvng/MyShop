"# MyShoppingCart"

<h1>MY SHOPPING CART</h1>
<h2>Introduction:</h2>
<p>Welcome to My Shopping Cart Git Repository.  
    I am going to take you on a journey through my creation of My Shopping Cart.  
    So, let's buckle up and enjoy the ride.</p>

<hr>

<h2>PROJECT DETAIL REQUIREMENTS</h2>
<h3>Project #2: The Store</h3>
<h4>Project Details</h4>
<h5>🔴 Mandatory To Pass:</h5>
    <ul>
        <li>
            MVP - Minimum Viable Product Your App Must Posess All 7 RESTful Routes
        </li>
    </ul>

Routes # | URL | HTTP Verb | Action | Notes
---------|-----|-----------|--------|------
1 | /products/ | GET | index | INDEX when a user types localhost:3000/products in browser this route shows a list or index of all products
2 | /products/new | GET | new | NEW when a user types localhost:3000/products/new in the browser this route shows the user a form to create a NEW fruit
3 | # | /products/:id | DELETE | destroy | DELETE initiates a delete request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to delete a product
4 | /products/:id | PUT	| update | UPDATE initiates a put request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to Update data about a product
5 | /products | POST | create | CREATE initiates a post request through a form submission with action = http://localhost:3000/products/and allows the application the ability to create a product
6 | /products/:id/edit | GET | edit | EDIT, when a user types localhost:3000/products/:idOfProduct/edit in the browser, shows the user a form to edit a product
7 | /products/:id | GET | show | SHOW when a user types localhost:3000/products/:idOfProduct shows the user an Individual fruit in the browser


<h4>Index Page</h4>
<p>Your app should have an index page where</p>
<ul>
    <li>all the products are displayed</li>
    <li>the images link to the product's show page</li>
    <li>and there should be a link to add a new product.</li>
</ul>
    
<h4>Show Page</h4>
<p>Your show page should display a product with</p>
<ul>
    <li>a link back to the products</li>
    <li>a link to edit the product (goes to the edit page)</li>
    <li>a delete button that deletes and the number of items remaining in stock</li>
</ul>

<h5>Example</h5>
<p>If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. <i>(Hint: conditionals in jsx).</i></p>
<p>On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.</p>
<p>The BUY button should also not be rendered if the quantity of the item is zero</p>

<h4>New & Edit Page</h4>  
<p>These views should render forms and submit to the appropriate routes.</p>

<h4>Redirects</h4>
<p>The create route should redirect to the index</p>
<p>The delete route should redirect to the index</p>
<p>The updated route will redirect back to the product's show page.</p>
<p>For the Hungry for more? the BUY button will go to a route that redirects back to the product's show page</p>

<h4>Technical Requirements</h4>
<p>Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong</p>
<p>Must contain all 7 Restful Routes</p>
<p>Must be styled and look like a store</p>

<hr>

<h2>MY WALK THROUGH & NOTE ON THE PROJECT:</h2>
