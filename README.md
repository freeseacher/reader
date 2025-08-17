# Czech Flashcards — Reading Trainer

A tiny single-page app that flashes Czech words to help children practice reading. Each word appears for a short, configurable time, then disappears so an adult can judge the attempt.

## Features

- Single HTML file without a build step and no jQuery.
- Only a custom list of Czech words is used; it is loaded from and saved to `localStorage`.
- The **Показ, мс** field controls how long a word stays visible.
- When a word hides, pressing the spacebar reveals it again for the same duration. After grading, the next word shows automatically.
- Grade words with arrow keys (← wrong, → correct) or by tapping the screen zones. The screen briefly flashes green or red as feedback.
- Tracks statistics (shown words, accuracy, streaks); view them via the **Статистика** button.
- Choose from several fonts and switch between normal and italic styles.
- Edit words via a modal editor; changes persist in `localStorage`.
- Automated tests for the `parseWords` helper run in CI with `npm test`; the HTML page itself does not run tests on load.

