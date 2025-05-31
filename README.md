# Quiz Application with Firebase

A quiz application that collects user information and quiz responses, storing them in Firebase Firestore.

## Project Structure

```
quiz/
├── README.md
├── index.html
├── styles.css
├── package.json
├── vite.config.js
├── firestore.rules
└── src/
    └── index.js
```

## Features

- User information collection (Name, Group, Marks)
- Multiple choice quiz questions
- Real-time score calculation
- Firebase Authentication (Anonymous)
- Firestore data storage
- Responsive design

## Setup

1. Navigate to the quiz directory:
   ```bash
   cd quiz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   - Local: http://localhost:5174

## Firebase Integration

- Uses Firebase Authentication for anonymous user access
- Stores quiz results in Firestore database
- Includes security rules for data protection

## Data Structure

Each quiz submission creates a document in Firestore with:
- User information (Name, Group, Marks)
- Quiz score and percentage
- Individual question answers
- Timestamp
- Anonymous user ID
