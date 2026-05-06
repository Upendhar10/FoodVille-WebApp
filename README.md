# FoodVille

FoodVille is a frontend-focused food ordering web application built using React. It simulates a real-world food delivery experience with features like authentication, menu browsing, cart management, and a mock checkout flow.

---

### Live Demo

https://foodville-web-app.netlify.app/

### GitHub Repository

https://github.com/Upendhar10/FoodVille-WebApp

---

## Features

- User Authentication (Firebase)
- Fully Responsive Design (Mobile-first)
- Menu Display with Category Filtering
- Cart Management using Context API
- Mock Checkout / Payment UI
- Toast Notifications using react-toastify

---

## Tech Stack

- **Frontend:** React (v18), JavaScript (JSX)
- **State Management:** Context API
- **Routing:** React Router
- **Styling:** CSS
- **API Handling:** Fetch
- **Authentication:** Firebase
- **Notifications:** React Toastify
- **Deployment:** Netlify

---

## Project Architecture

- Component-based folder structure
- Reusable UI components
- Global state management using Context API

### State Flow

1. User browses menu
2. Adds items to cart
3. Cart state updates globally via Context API
4. User proceeds to checkout

---

## Data Handling

- Menu data is stored locally as mock data (array with images)
- No backend integration
- Firebase is used for authentication

---

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Upendhar10/FoodVille-WebApp.git

# Navigate into the project
cd FoodVille-WebApp

# Install dependencies
npm install

# Start the development server
npm start