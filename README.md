# Tailwind CSS Flexbox Overflow Bug

This repository demonstrates a common issue encountered when using Tailwind CSS's flexbox utilities: unexpected layout behavior when content within a flex item overflows its allocated space.

## Problem
The provided `bug.js` file contains a simple example of a flex container with two items. Each item is assigned `w-1/2` to occupy half the width.  However, if the content within either item exceeds the available space, the layout breaks and content overflows into the other item's space. This is because `w-1/2` is a width constraint that's easily overridden by large content.

## Solution
The `bugSolution.js` file offers a solution by adding the `flex-shrink-0` utility to prevent the flex items from shrinking below their assigned width. Additionally, using a `max-w-full` to prevent the content from growing beyond the container. This ensures that content is clipped or scrolled, rather than disrupting the overall layout.

## How to reproduce the bug
1. Clone the repository
2. Open `bug.html` in your browser
3. Observe the layout issue.

## How to fix the bug
1. Apply the solution from `bugSolution.js` to your project. 
2. Test on multiple screen sizes and resolutions