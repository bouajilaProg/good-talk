# Chat App with AI-powered Toxicity Filter

This project is a simple chat application built with a focus on providing a non-toxic, family-friendly environment. The app uses AI to detect and censor toxic messages in real-time, ensuring a safer space for users to communicate. The entire app was developed in less than a day as a personal challenge to explore different technologies and improve my skills.

## Features

- **AI-powered Toxicity Filter**: Integrated BERT and NLP to detect and censor toxic language in real-time.
- **Real-time Messaging**: Uses Socket.io for seamless real-time communication between users.
- **Frontend with React**: The frontend is built with React, offering a dynamic and responsive user interface.
- **Backend with Express**: The backend is built using Express, handling the chat system and AI integration.
- **Tailwind CSS**: Styled using Tailwind CSS for a clean and responsive design.

### Incoming Features

- **Secure Authentication**: Implementing a secure login system to protect user data.
- **Email Validation**: Users will need to validate their email addresses for better security and user verification.
- **Chat History**: Storing and displaying previous chat messages for a more complete chat experience.
- **Improved UI**: Enhancing the user interface for a better overall experience.
- **Containerized Environment**: The app will be containerized using Docker for easier deployment and scalability.

## Tech Stack

- **Frontend**: 
  - React
  - Tailwind CSS
  - TypeScript
  - Axios

- **Backend**: 
  - Express.js
  - TypeScript
  - Socket.io

- **AI**: 
  - BERT (detoxify)

## How This Project Was Made in Less Than a Day

This project was built quickly by focusing on the core functionality and using technologies that I am familiar with. The AI component was integrated using pre-trained BERT models for toxicity detection, while the real-time messaging system was powered by Socket.io. React and Tailwind CSS allowed for rapid frontend development, and Express served as the backend framework. By focusing on simplicity and reusing libraries and components, I was able to deliver a working prototype in a very short time.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/bouajilaProg/GoodTalk
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd GoodTalkFront
   pnpm install
   cd ../GoodTalkBack/
   pnpm install
   cd ../GoodTalkAi
   pip install -r req.txt
   ```

3. Run the backend server:
   ```bash
   cd GoodTalkBack
   npm run dev
   ```

4. Run the frontend:
   ```bash
   cd ../GoodTalkFront
   npm run dev
   ```

5. Run the hosted AI API:
   ```bash
   cd ../GoodTalkAi
   uvicorn main:app --reload
   ```

6. Open the app in your browser at `http://localhost:5173`.

## Future Improvements

- Adding secure authentication and email validation.
- Implementing chat history to store and view past conversations.
- Enhancing the user interface to make it more polished and user-friendly.
- Containerizing the app for easier deployment and scalability.




