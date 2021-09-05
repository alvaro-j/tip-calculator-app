# Frontend Mentor - Tip calculator app

This is a solution to the [Tip calculator app on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents✒️

- [Overview](#overview)🎯
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)🔗
- [My process](#my-process)🧩
  - [Built with](#built-with)🔨
  - [What I learned](#what-i-learned)📝
  - [Useful resources](#useful-resources)
- [Author](#author)🙋🏻

## Overview🎯

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot
![image](https://user-images.githubusercontent.com/86482525/132128435-8739d8c2-47d3-459d-8499-7ae465b4b7ae.png)

### Links🔗

- Live Site URL: [https://alvaro-j.github.io/tip-calculator-app/](https://alvaro-j.github.io/tip-calculator-app/)

## My process🧩

### Built with

- Semantic HTML5 markup
- CSS Flexbox
- CSS Grid Layout
- JavaScript

### What I learned📝

- Use <strong>CSS Grid layout</strong> to organize the elements: in this case, i wanted to sort the percentages.
```css
#percent {
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px 10px;
}
```
- Use <strong>the add() method</strong> to add a class to an element: in this case, i wanted to show the error message if the value was zero.
```js
function setPersonValue() {
    if(personValue <= 0) {
        errorMsg.classList.add('show-error-msg');
    }
}
```

### Useful resources

- [CSS Grid layout](https://www.youtube.com/watch?v=hKXOVD2Yrj8) - This helped me to understand how to use grid in CSS.

## Author🙋🏻

- Github - [Álvaro J.](https://www.github.com/alvaro-j/)
- Frontend Mentor - [@alvaro-j](https://www.frontendmentor.io/profile/alvaro-j)
