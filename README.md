# Puzzle Game

This is a simple puzzle game where users can click on cells to reveal images and answer questions. Once all cells are solved, a final image is displayed.

## Features

- Click on cells to reveal images and answer questions.
- Double-click on the image to solve the cell.
- Once all cells are solved, a final image with a secret text is displayed.

## Files

- `index.html`: The main HTML file containing the structure of the game.
- `scripts.js`: The JavaScript file containing the game logic.
- `styles.css`: The CSS file for styling the game.

## How to Play

1. Open `index.html` in a web browser.
2. Click on a cell to reveal an image and a question.
3. Double-click on the image to solve the cell.
4. Once all cells are solved, click the "Solve All" button to reveal the final image.

## Customization

### Update Logo
1. Replace the logo images in the `images/logo/` directory with your own images.
2. Update the `src` attributes in the `index.html` file (lines 11 and 12) to have your images name.

### Change Images and Questions
1. Open `scripts.js`.
2. Update the `imageSources` array with paths to your new images (line 2).
3. Update the `questions` array with your new questions (line 24).

### Change Answer Text
1. Open `scripts.js`.
2. Update the `solvedTexts` array with your new answer texts (line 13).

### Change Secret Text
1. Open `scripts.js`.
2. Update the `secretText` variable with your new secret text (line 35).