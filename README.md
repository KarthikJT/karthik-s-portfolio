# Karthik JT — Personal Portfolio (MERN Stack)

A premium, fully responsive personal portfolio / digital resume for **Purvi S Kiran**, built with the MERN stack (MongoDB, Express, React, Node.js). The site doubles as a Content Management System: Purvi is the only owner and can edit every piece of content from a hidden dashboard — no code changes required.

## Project structure

```
purvi-portfolio/
├── backend/            Express + MongoDB REST API
│   ├── config/         Database connection
│   ├── models/         Mongoose schemas (one per portfolio section)
│   ├── controllers/    Auth + generic CRUD/singleton controller factories
│   ├── routes/         REST routes (public GET, protected CUD)
│   ├── middleware/     JWT auth guard, Cloudinary upload, error handler
│   ├── utils/          Cloudinary config, JWT helper
│   ├── seed/           One-time seed script with Purvi's real resume data
│   └── server.js
└── frontend/            React (Vite) + Tailwind + Framer Motion
    └── src/
        ├── components/  Navbar, Card, SocialIcons, section components, dashboard widgets
        ├── pages/        Public Home page + hidden dashboard pages
        ├── layouts/       Dashboard sidebar layout
        ├── context/       Auth context (JWT session)
        └── services/      Axios API client
```

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Fill in `.env`:

```dotenv
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=a-long-random-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLIENT_URL=http://localhost:5173
OWNER_EMAIL=purviskiran2005@gmail.com
OWNER_PASSWORD=choose-a-strong-password
```

- **MONGO_URI**: create a free cluster at MongoDB Atlas, or point to a local MongoDB instance.
- **CLOUDINARY\_\***: create a free Cloudinary account — the dashboard shows the cloud name, API key, and API secret on the home screen.
- **OWNER_EMAIL / OWNER_PASSWORD**: only used once, by the seed script below, to create the single owner account.

Seed the database (creates the owner account + populates every section with Purvi's real resume content, which can then be edited from the dashboard):

```bash
npm run seed
```

Start the API:

```bash
npm run dev     # nodemon, for local development
# or
npm start       # plain node, for production
```

The API runs at `http://localhost:5000/api`.

## 2. Frontend setup

```bash
cd frontend
npm install
cp .env.example .env
```

`.env`:

```dotenv
VITE_API_URL=http://localhost:5000/api
```

Start the dev server:

```bash
npm run dev
```

The site runs at `http://localhost:5173`.

## 3. Using the owner dashboard

- The public site has **no visible login or signup link anywhere**.
- Go directly to `http://localhost:5173/manage` — it will redirect to `/manage/login` if you aren't signed in.
- Sign in with the `OWNER_EMAIL` / `OWNER_PASSWORD` you set in the backend `.env` before seeding.
- From the dashboard you can edit the profile/hero, professional summary, education, skills, internships, projects (with banner + gallery images), hackathons (with photos + certificate), certifications (with certificate image), achievements, contact details, and social links.
- Every save updates the public portfolio immediately — no redeploy or code change needed.

## 4. Deployment notes

- Backend: deploy to any Node host (Render, Railway, Fly.io, etc.). Set the same environment variables there.
- Frontend: `npm run build` produces a static `dist/` folder deployable to Vercel, Netlify, or any static host. Set `VITE_API_URL` to your deployed backend's `/api` URL.
- Update `CLIENT_URL` in the backend `.env` to your deployed frontend URL so CORS allows it.
- Images are stored only as Cloudinary URLs in MongoDB — no files are stored on the server itself.

## 5. Security notes

- There is no public signup route anywhere in the API or frontend — the only owner account is created by the seed script.
- All create/update/delete routes require a valid JWT (`Authorization: Bearer <token>`), obtained only via `/api/auth/login`.
- Passwords are hashed with bcrypt before being stored.
- Visitors can only ever call `GET` endpoints; all mutating endpoints are protected.
