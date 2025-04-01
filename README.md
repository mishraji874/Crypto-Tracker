# Crypto Currency Price Tracking App

A modern cryptocurrency tracking application built with React that allows users to monitor real-time crypto prices, view historical data through charts, and track market trends.

[Live Demo](https://crypto-project-coin-gecko-tijg.vercel.app/)

## Features

- 📈 Real-time cryptocurrency price tracking
- 📊 Interactive price charts with multiple timeframe options
- 💱 Currency conversion between USD and INR
- 📱 Responsive design for all devices
- ⚡ Fast page loads with React Suspense
- 🛡️ Robust error handling with Error Boundaries

## Tech Stack

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS + DaisyUI
- **State Management:** Zustand
- **Data Fetching:** React Query
- **API:** CoinGecko
- **Charts:** Chart.js with react-chartjs-2
- **Routing:** React Router DOM
- **Build Tool:** Vite

## Architecture Highlights

- Implements presenter-container pattern for better component organization
- Custom hooks for data fetching and state management
- API request caching with React Query for optimal performance
- Lazy loading with React Suspense for better load times
- Global state management using Zustand
- Error boundaries for graceful error handling

## Getting Started

1. Clone the repository:
```sh
git clone https://github.com/mishraji874/Crypto-Tracker.git
```

2. Install dependencies:
```sh
cd Crypto-Tracker
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Build for production:
```sh
npm run build
```

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Route components
├── hooks/          # Custom React hooks
├── services/       # API service functions
├── state/          # Zustand store
├── context/        # React context
├── helpers/        # Utility functions
└── assets/         # Static assets
```

## Screenshots

![Homepage](https://github.com/user-attachments/assets/fe89b19e-be17-47c6-8f17-027402922dae)
![Details Page](https://github.com/user-attachments/assets/e5142715-b9b7-45a4-97b2-552b16ca4664)

## License

MIT