# E-commerce App Documentation

# Project Setup

 * Environment Setup
Install Node.js and npm.
npx create-expo-app "application name"
Set up Android and iOS emulator or connect a physical device.


# Project Structure
.
├── assets
├── components
│   ├── List.js
│   ├── Product.js
│   ├── TrendingDeals.js
├── data
│   ├── listData.js
│   ├── trendingDealsData.js
├── navigation
│   ├── StackNavigator.js
├── node_modules
├── reduxStore
│   ├── ProductSlice.js
│   ├── store.js
├── screens
│   ├── CartScreen.js
│   ├── HomeScreen.js
│   ├── ProductInfoScreen.js
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── package.json
├── README.md
├── yarn.lock


# Dependencies
@react-navigation/bottom-tabs: Version 6.5.11
@react-navigation/native: Version 6.1.9
@react-navigation/native-stack: Version 6.9.16
@reduxjs/toolkit: Version 1.9.7
axios: Version 1.6.0
expo: Version 49.0.15
expo-status-bar: Version 1.6.0
react: Version 18.2.0
react-native: Version 0.72.6
react-native-dropdown-picker: Version 5.4.6
react-native-paper: Version 5.11.1
react-native-safe-area-context: Version 4.7.4
react-native-screens: Version 3.27.0
react-redux: Version 8.1.3

# Navigation
The app's navigation is defined in StackNavigator.js. It uses the @react-navigation/native-stack and @react-navigation/bottom-tabs libraries to create a navigation stack with two main screens: HomeScreen and CartScreen.

# State Management
State management is handled with Redux Toolkit. The app has a single reducer defined in ProductSlice.js, which manages the shopping cart state. Actions such as adding items to the cart, removing items, incrementing, decrementing, and clearing the cart are available.

# Screens and Components

CartScreen.js: Displays the contents of the shopping cart.
HomeScreen.js: The main screen for product browsing and selection.
ProductInfoScreen.js: Provides details about a selected product.

Components:

List.js: Renders a list of items.
Product.js: Displays a product.
TrendingDeals.js: Component for displaying trending deals.

# API Integration
The app fetches product data from the FakeStore API using Axios. The data is used to populate product listings.

# Instructions for Running the Project:

To run the project locally, follow these steps:

* Make sure you have Node.js and npm installed.

* Navigate to the project directory in your terminal.

* Run the following commands in your terminal to set up and start the project:
     yarn 
     yarn expo start


     (assets/homescreen.png)
     (assets/productdetails.png)
     (assets/cart.png)