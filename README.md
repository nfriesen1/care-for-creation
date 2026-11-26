# St. Cecilia's Care for Creation

The website for my parish's Care for Creation team, a group of parishioners that formed in 2023 around Pope Francis' encyclical *Laudato Si'*. The site gives the team a home online: who they are, upcoming events, practical resources for caring for the environment, and a way to get in touch.

**Live site:** https://stcs-careforcreation.netlify.app

## Features

- **Home and About:** the team's story, its mission and its strategic framework.
- **Events:** an embedded Google Calendar of upcoming events, with a link to sign up through SignUpGenius.
- **Resources:** curated links for advocacy, home energy rebates in Minnesota, composting, and material for kids and families.
- **Contact:** a contact form that sends straight to the team's inbox through [EmailJS](https://www.emailjs.com/), so no backend server is needed. It checks that all fields are filled in and shows a success or error message after sending.
- **Responsive layout** built with React Bootstrap, plus a custom 404 page.

## Tech stack

| | |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Routing | React Router 6 |
| UI | React Bootstrap and Material UI |
| Email | EmailJS |
| Hosting | Netlify (`public/_redirects` sends every route to `index.html` so client-side routing works) |

## Running it locally

Requires Node.js 18 or later.

```bash
npm install
npm start          # dev server at http://localhost:5173
npm run build      # production build in dist/
npm run serve      # preview the production build
```

The contact form needs an EmailJS service ID, template ID and public key. See `src/components/ContactForm.jsx` for where they're read.

## Project structure

```
src/
  pages/        Home, About, Events, Resources, Contact, NotFound
  components/   ContactForm
  styles/       one stylesheet per page
  Routes.jsx    route table
public/         static assets, Netlify redirects
```
