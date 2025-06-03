const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const connectDB = require('./config/db');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

// Route imports
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const commitmentRoutes = require('./routes/commitmentRoutes');
const regulationRoutes = require('./routes/regulationRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const marketInsightRoutes = require('./routes/marketInsightRoutes');
const studyRoutes = require('./routes/studyRoutes');
const tutorialRoutes = require('./routes/tutorialRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(logger);

// API routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/commitments', commitmentRoutes);
app.use('/api/regulations', regulationRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/market-insights', marketInsightRoutes);
app.use('/api/studies', studyRoutes);
app.use('/api/tutorials', tutorialRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', date: new Date() });
});

// Error handler
app.use(errorHandler);

const PORT = config.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${config.NODE_ENV} mode on port ${PORT}`);
});
