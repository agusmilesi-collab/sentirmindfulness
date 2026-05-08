// Vercel Speed Insights initialization for static HTML site
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false, // Set to true during development if you want to see debug logs
});
