/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('homepage',  { title: 'Create a snappy page title' })

/* Authentication Routes */
Route.on('/login').render('auth.login',  { title: 'Login to our new application' }).as('login')
Route.post('/login', 'AuthController.login')
Route.on('/register').render('auth.register',  { title: 'Register for our new application' }).as('register')
Route.post('/register', 'AuthController.register')
Route.get('/logout', 'AuthController.logout').as('logout')


Route.on('/dashboard').render('app.dashboard',  { title: 'Create a snappy page title' }).middleware('auth')
