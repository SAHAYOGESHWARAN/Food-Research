# Food Research Platform Frontend

_Project built by sahayogeshwaran_

This is the frontend for the Food Research Platform, providing a modern, premium Nutric-themed dashboard and modules for nutrition and food research.

## Features

- Nutric theme: fresh greens, citrus yellow, and healthy accents
- Always-visible sidebar for easy navigation
- Modules: Market Insights, Products, Regulations, Studies, Tutorials, Commitments, Ingredients, Subscriptions
- Responsive, modern UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

```sh
npm start
# or
yarn start
```

The app will run at `http://localhost:3000` by default.

### Project Structure

- `src/pages/` - Main pages (Dashboard, Login, etc.)
- `src/modules/` - Feature modules
- `src/styles/` - CSS and theme files
- `src/components/` - Reusable UI components

### Theming

The Nutric theme is defined in `src/styles/dashboard.css` and related CSS files. Adjust colors and styles there for further customization.

---

# Food Research Platform Backend

This is the backend for the Food Research Platform, providing RESTful APIs for nutrition and food research data.

## Features

- User authentication (JWT)
- CRUD for Market Insights, Products, Regulations, Studies, Tutorials, Commitments, Ingredients, Subscriptions
- Modular controllers and routes
- MongoDB database

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Configuration

- Edit `config/config.js` to set your MongoDB URI and other environment variables.

### Running the Server

```sh
npm start
# or
yarn start
```

The server will run at `http://localhost:5000` by default.

### API Endpoints

See `FoodResearchPlatform.postman_collection.json` for example requests and endpoints.

---

## License

MIT License

## Contact

For questions or support, contact the project maintainer.
