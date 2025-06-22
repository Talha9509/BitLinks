# Bitlinks

Bitlinks is a simple and privacy-focused URL shortener built with [Next.js](https://nextjs.org), [MongoDB](https://www.mongodb.com/), and [Tailwind CSS](https://tailwindcss.com/).

## Features

- 🔗 Shorten long URLs with custom short text
- 🚀 Instant redirection via unique short URLs
- 🛡️ No tracking, no user data required
- 🎨 Responsive UI with Tailwind CSS
- 🗂️ Font optimized with [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- 🗃️ MongoDB-backed persistent storage

## Project Structure

```
.
├── app/                # Next.js app directory
│   ├── [shorturl]/     # Dynamic route for redirection
│   ├── api/generate/   # API route for generating short URLs
│   ├── fonts/          # Local fonts
│   ├── shorten/        # Shorten URL page
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js         # Home page
├── components/
│   └── Navbar.js       # Navigation bar
├── lib/
│   └── mongodb.js      # MongoDB connection helper
├── Montserrat/         # Montserrat font files and license
├── public/             # Static assets
├── .env.local          # Environment variables (not committed)
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── jsconfig.json
├── next.config.mjs
└── README.md
```

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/bitlinks.git
cd bitlinks
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your MongoDB URI:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

### 4. Run the development server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- **Home Page:** Introduction and call-to-action.
- **Shorten Page:** Enter a long URL and a preferred short text, then generate your short link.
- **Redirection:** Visiting `/[shorturl]` will redirect to the original URL if it exists.

## Deployment

You can deploy this app to [Vercel](https://vercel.com/) or any platform that supports Next.js.

## License

- Font: [Montserrat](Montserrat/OFL.txt) under SIL Open Font License 1.1
- Code: MIT License (add your own LICENSE file if desired)

---

Made with ❤️ using Next.js, MongoDB, and