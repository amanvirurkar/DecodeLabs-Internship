# DecodeLab — Landing Page

A small, responsive landing page built with HTML, CSS and vanilla JavaScript. The project is a clean student-style frontend suitable for an internship portfolio: simple layout, dark/light mode, a hero with background video, interactive cards, and a validated signup form.

## Features

- Responsive layout (mobile, tablet, desktop)
- Dark / Light mode toggle
- Hero section with background video and improved contrast in light mode
- Small interactive cards with subtle hover effects
- Signup form with client-side validation (Name, Email, Password, Confirm Password)
- Accessible error messages and success feedback

## Files

- `index.html` — main markup
- `style.css` — project styles and light/dark adjustments
- `script.js` — UI interactions and form validation
- `images/` — media assets used by the site

## Project Structure

```text
project/
 ├── Task1-Static/
 ├── Task2-Responsive/
 ├── Task3-Interactive/
 ├── Task4-Form/
```

```
project1/
├── index.html
├── features.html
├── courses.html
├── contact.html
├── style.css
├── script.js
└── images/
```

- `index.html`: main landing page that includes the Hero, Features, Courses and Contact sections so it behaves like a single-page landing experience
- `features.html`: detailed Features page for deeper information
- `courses.html`: detailed Courses page listing available tracks
- `contact.html`: Contact / signup form with client-side validation
- `style.css`: project stylesheet (includes smooth scrolling)
- `script.js`: UI interactions, theme toggle, and form validation
- `images/`: media assets used across the site

## Local preview

Start a simple local server from the project folder and open http://localhost:8000

```bash
python3 -m http.server 8000
```

## Usage notes

- The header contains a `Dark Mode` button to toggle themes.
- The signup form is located in the `Contact` section and uses client-side validation in `script.js`. Submissions are prevented from reloading the page; a success message shows when validation passes.
- Light mode readability was improved with scoped overlays and badge styles; dark mode styles were not changed.

## Accessibility & UX

- Error messages are rendered inline beneath inputs and use `aria-live="polite"` for screen reader updates.
- Transitions are subtle to keep interactions smooth and not distracting.

## Contributing

Open an issue or submit a PR with changes. Keep styling simple and maintain the existing structure when possible.

## License

This project is provided as-is for portfolio/demo purposes.
