A content remixing tool using React.

## Features

1. Paste in text we want to remix
2. Click a button to apply the remixing we want for it
3. Send the request to an AI API endpoint
4. See the remix in an output box
5. Add other styling and freatures that we want as we go

## Tech Stack

- React
- TailwindCSS
- Vercel
- Claude API

## Getting Started

1. Clone the repository
```bash
git clone <your-repo-url>
cd content-remix-app
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Claude API key:
```bash
VITE_CLAUDE_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

## Project Structure

```
content-remix-app/
├── src/
│   ├── components/
│   │   ├── TextInput.jsx
│   │   ├── RemixButton.jsx
│   │   └── OutputBox.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
└── index.html
```

Now, let's create the project. Here are the steps we'll follow:

1. First, create a new React project using Vite:
```bash
npm create vite@latest content-remix-app -- --template react
cd content-remix-app
```

2. Install required dependencies:
```bash
npm install @anthropic-ai/sdk tailwindcss postcss autoprefixer
```

3. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

Would you like me to proceed with creating the initial components and setting up the basic structure? I can help you with:

1. Setting up Tailwind configuration
2. Creating the main App component
3. Creating the individual components (TextInput, RemixButton, OutputBox)
4. Setting up the Claude API integration

Let me know which part you'd like to tackle first!