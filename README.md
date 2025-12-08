# What's For Dinner

"What's For Dinner" is a simple and elegant web application designed to help you decide what to cook. If you're struggling to come up with meal ideas, this project offers a randomly selected recipe with all the details you need to prepare it.

## Description

Is dinner not ready yet? Is dinner not something you have enough time to consider? The goal of this small project is to guide you through the selection of a meal, its recipe, and its complete preparation.

This project presents a clean, user-friendly interface to display a single, randomly chosen recipe at a time. Each recipe card is packed with information, making it easy to get inspired and start cooking.

## Features

-   **Random Recipe Generation:** Get a new meal idea with the click of a button.
-   **Detailed Recipe Information:** Each recipe includes:
    -   A high-quality image of the dish.
    -   Difficulty level and cuisine origin.
    -   Preparation time, cooking time, and serving count.
    -   A list of ingredients.
    -   Step-by-step cooking instructions.
    -   Nutritional information (calories, protein, carbs, etc.).
    -   Helpful chef's tips.
-   **Time Alert:** A warning is displayed for recipes that require more than 45 minutes of preparation or cooking time.
-   **Responsive Design:** The layout is designed to work on different screen sizes.

## How to Use

1.  Clone or download this repository.
2.  Open the `index.html` file in your web browser.
3.  A random recipe will be displayed.
4.  To get a new suggestion, click the "**Try Another Recipe**" button.

## Technologies Used

-   **HTML5:** For the basic structure of the web page.
-   **CSS3:** For styling, including custom properties and layout.
-   **Bootstrap 5:** For the responsive grid system, components, and styling utilities.
-   **Font Awesome:** For icons used throughout the interface.
-   **JavaScript (ES6):** For the core functionality of randomly selecting and displaying recipes.

## Data Source

All recipe data is currently hardcoded in a JavaScript array within the `js/meals.js` file. The project demonstrates how to dynamically generate content from a local data source.
