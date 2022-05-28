import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl font-medium text-center'>Blogs</h2>

            <div className='px-6'>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">1. How will you improve the performance of a React Application?</h2>
                        <ol class="list-decimal">
                            <li>Keeping component state local where necessary.</li>
                            <li>Memoizing React components to prevent unnecessary re-renders.</li>
                            <li>Code-splitting in React using dynamic import</li>
                            <li>Windowing or list virtualization in React.</li>
                            <li>Lazy loading images in React.</li>
                        </ol>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">2. What are the different ways to manage a state in a React application?</h2>
                        <ol class="list-decimal">
                            <li>Local state.</li>
                            <li>Global state.</li>
                            <li>Server state.</li>
                            <li> URL state.</li>
                        </ol>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">3. How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">4. What is a unit test? Why should write unit tests?  </h2>
                        <p>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">5. Management has given you the greenlight to create the product portion of the web application.  </h2>
                        <p>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>
                        <ol class="list-decimal px-4">
                            <li>1. Create a Product class with the following attributes:
                                a. Price

                                b. Name

                                c. Description

                                d. Id
                            </li>
                            <li>
                                Create a ShoppingCart.js file and include it in the products page. In the script, create an empty array to store the items added to the cart. Create a products array and create a product object for each of your products and store it in the products array when the script loads.
                            </li>
                            <li>
                                The shopping cart script should have the following functions:

                                a. add - Takes an id, finds the product object in the products array and adds it to the items purchased array.

                                b. remove - Takes an id and removes the corresponding object from the items purchased array.

                                c. Returns html for displaying the items in the cart.
                            </li>
                            <li>
                                Create a products.html page. Add 5 product images to the page. Under each product add an add to cart button. Make the id property of the button the id for the product. Add a remove from cart button on each item.
                            </li>
                            <li>
                                At the top right of the page at a link that says (0) cart. When the add item is pressed, this number should increase. When the remove item is pressed, this number should decrease.
                            </li>
                            <li>
                                When I click on the link, it should take me to a Checkout page. The checkout page should display all the items in the cart, and a total price.
                            </li>
                            <li>
                                Add a form on the page that take my name , email, phone number, and credit card number. Use a regular expression to validate the email, phone number, and credit card.
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;