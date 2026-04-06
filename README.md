# Project Overview — Frontend Tasks

This repository contains a set of small frontend exercises and a landing-page project suitable for portfolio use.

Project structure

```text
project/
├── Task1-Static/        # Static HTML layouts and basic markup
├── Task2-Responsive/    # Responsive designs (mobile-first)
├── Task3-Interactive/   # JavaScript interactions and small components
├── Task4-Form/          # Forms, validation, and accessibility
└── project1/            # Landing page project (DecodeLab)
    ├── index.html
    ├── features.html
    ├── courses.html
    ├── contact.html
    ├── style.css
    ├── script.js
    └── images/
```

Quick notes

- `project1/index.html` is a landing page that includes Hero, Features, Courses and Contact sections. It behaves like a smooth single-page landing experience while keeping `features.html`, `courses.html`, and `contact.html` as separate detailed pages.
- `style.css` includes layout, theme styles, and `html { scroll-behavior: smooth; }` for smooth scrolling.
- `script.js` handles theme toggle, the info toggle in the hero, and client-side validation for the signup form.

Local preview

Start a simple local server from the project folder and open http://localhost:8000

```bash
python3 -m http.server 8000
```

If you want this README translated to Hindi/Urdu or want additional details (installation, contribution steps), tell me and I will update it.
