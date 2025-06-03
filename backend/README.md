# Food Research Platform Backend

*Project built by sahayogeshwaran*

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
