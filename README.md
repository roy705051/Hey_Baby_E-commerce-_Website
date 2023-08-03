# Hey Baby!
Hey Baby using React-app and javascript and json server

---->This project will help our users to buy awesome products for their baby according to their requirements and latest fashion.
# Our website is deployed in netlify
# Link--> https://hey-baby-ecom.netlify.app/

# Welcome page

# First, there is an index Page of the Hey Baby! where a person can sign up or sign in and add their products to cart.

#Screenshot of the first page :

![Web capture_29-7-2023_62844_localhost](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/de873141-e423-4b01-abcf-a31c69fff9cd)

Sample code:
![Screenshot 2023-07-29 063817](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/a135f2a6-ede0-41f4-a622-697c69a36d46)


# Sign up page

We had made sign in page through which we will be taking data to json server and save the data for further reference.

Screenshot:

![Screenshot 2023-07-29 063133](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/dd41ac32-f8f2-4fb4-a4e4-2788928b11f3)

# Sign in page

We have login page in which person can sign in and use our website.

Screenshot:
![Screenshot 2023-07-29 063104](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/0ffd8f98-9ee0-4c8f-862f-266f51166806)


Sample code:

![Screenshot 2023-07-29 064059](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/c6791314-6941-48e9-a359-6086eee1734e)

# All product

In this page we are showing all the product where person can filter and but that product according to their requirements.

Screenshot:

![Web capture_29-7-2023_62922_localhost](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/eaf38816-9d15-4c04-b3f3-66d898ebe974)


# Contact page

This page helps our users to effortlessly connected with us, we are available 24*7 for their service and would be happy to serve you.

Screenshort:

![Screenshot 2023-07-29 063121](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/7b895eda-6a6b-4057-8d1c-2525e5a8705a)


# The cart page
the page use to collect the product that user what to buy. The user will only be able to checkout if the cart is not empty and if user is not signedin the user will be redirected to signin page

Screenshot:
![Screenshot 2023-07-29 063217](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/4e8576ce-0dff-4d34-8ba4-423a6bdaffa5)


# Address form and payment gateway for checkout has also been made
## take information  about shipping
#screenShort
![Screenshot 2023-07-29 063240](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/7e6a5b98-46f8-45a2-be86-66ad011288c2)

## payment method 
#screenShort
![Screenshot 2023-07-29 063308](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/cf8ab7ff-c7ae-4962-80bc-9105f71d1d79)

## card details--->
#screenShort
![Screenshot 2023-07-29 063318](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/314eb563-88bd-495c-9d54-ba30bbbca3c9)

## payment succcesfull-->    after that the success toast will come after after few seconds it will redirect the user to the homepage and update the items bought ,payment status and ordered items in address.json file
#screenShort

![Screenshot 2023-07-29 063334](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/27515cd7-994a-4a4a-a009-e76f33db9e3b)


# folder Structure
![Screenshot 2023-07-29 070116](https://github.com/roy705051/Hey_Baby_E-commerce-_Website/assets/118226807/2ced6887-9934-43c6-ae83-8ba6e6cee4ca)

# Do before running  the program
1st install--> npm start
2nd-->npm install -g json-server
3nd-->npm install @mui/joy @emotion/react @emotion/styled
4nd-->npm install @mui/icons-material
5nd-->npm install concurrently --save-dev
6nd-->add in pakage.json in script-->"dev": "concurrently \"json-server --watch data.json --port 8080\" \"json-server --watch address.json --port 3001\""
7nd-->npm run dev
8nd-->another terminal -->npm start


## Thank You

# (by Team Code Breaker)
