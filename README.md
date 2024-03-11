---
runme:
  id: 01HRPW613F6P4SZ9WG082VFJ2J
  version: v3
---

# 🚀 Running Reservamos - Weather Project Locally

[![Reservamos CI/CD](https://github.com/carlos-ssh/silver-umbrella/actions/workflows/linters.yml/badge.svg)](https://github.com/carlos-ssh/silver-umbrella/actions/workflows/linters.yml)

[![Reservamos CI/CD](https://github.com/carlos-ssh/silver-umbrella/actions/workflows/linters.yml/badge.svg)](https://github.com/carlos-ssh/silver-umbrella/actions/workflows/linters.yml)

Welcome to Reservamos - Weather project! This guide is here to walk you through getting your project up and running on your local machine. Before we dive in, ensure you have `Node.js` installed on your system. This project requires two environment variables to function correctly.

## 📋 Prerequisites

You need the following installed to run this project:

- Node.js (v20.9.0)
- npm (comes installed with Node.js)

You can check if you already have Node.js and npm installed and their versions by running the following commands in your terminal:

```bash
node -v
npm -v
```

## 🛠 Setup

Before starting, you need to set up the required environment variables. You will need:

- `NEXT_PUBLIC_UNSPLASH_CLIENT_ID`: Your API key for connecting with Unsplash service.
- `NEXT_PUBLIC_OPENWEATHER_APP_ID`: Your API key for connecting with OpenWeather service.

Create a `.env.local` file at the root of your project and add the following lines:

```env
NEXT_PUBLIC_UNSPLASH_CLIENT_ID=your_api_key_here
NEXT_PUBLIC_OPENWEATHER_APP_ID=your_database_url_here
```

Be sure to replace `your_api_key_here` and `your_database_url_here` with your actual values.

## 🚀 Instructions to Start

After setting up your environment variables, follow these steps to start your project:

1. Open your terminal.
2. Change to your project's directory (if you're not there already).

```bash
cd path/to/your/project
```

3. Install the project's dependencies with npm.

```bash
npm install
```

4. Run the project locally.

```bash
npm run dev
```

This will start your NextJS development server on `http://localhost:3000`. Open your browser and visit this address to see your project running!

## 🤝 Contributing

Contributions to this project are welcome! If you have a suggestion for improvement or encounter any issues, feel free to create an issue or send a pull request.

## 📝 License

This project is under the MIT License. For more details, see the `LICENSE` file in this repository.

---

That's all! With these steps, you should be able to run your Reservamos - Weather locally without any issues. If you have any questions, don't hesitate to ask!
```
