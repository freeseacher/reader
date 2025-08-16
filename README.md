# Czech Flashcards — Reading Trainer

## Requirements

- Single HTML file without a build step and no jQuery.
- Loads a custom list of Czech words from `localStorage`.
- After grading, the next word shows automatically for the duration set in **Показ, мс**.
- When the word hides, pressing the spacebar shows it again for the same duration.
- Grade words with arrow keys (← wrong, → correct) or by tapping the screen zones.
- Tracks statistics: shown words, accuracy, current streak, and best streak.
- Includes a dyslexia mode using the OpenDyslexic font and relaxed spacing.
- Edit words via a modal editor; changes are persisted in `localStorage`.
- Automated tests for the `parseWords` helper run in CI with `npm test`; the HTML page itself does not run tests on load.

