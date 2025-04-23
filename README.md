# MedCoach AI

An AI-powered PLAB 2 practice tool with voice interaction and feedback.

## Features

- Voice-based AI patient interaction
- Realistic medical scenarios (OSCE-style stations)
- Feedback engine based on communication, empathy, clinical reasoning
- Progress dashboard
- Mock exams (timed, multi-scenario)
- Payment & subscription system

## Tech Stack

- Frontend: Next.js, React, Tailwind CSS
- State Management: Redux Toolkit
- UI Components: Headless UI, Heroicons
- Animations: Framer Motion
- API Integration: Axios

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   NEXT_PUBLIC_GOOGLE_SPEECH_API_KEY=your_google_speech_api_key
   NEXT_PUBLIC_ELEVENLABS_API_KEY=your_elevenlabs_api_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/         # Reusable UI components
├── features/          # Feature-specific components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
├── store/             # Redux store configuration
└── types/             # TypeScript type definitions
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_API_URL`: The URL of your API server
- `NEXT_PUBLIC_OPENAI_API_KEY`: Your OpenAI API key for GPT integration
- `NEXT_PUBLIC_GOOGLE_SPEECH_API_KEY`: Your Google Speech-to-Text API key
- `NEXT_PUBLIC_ELEVENLABS_API_KEY`: Your ElevenLabs API key for text-to-speech

Create a `.env.local` file in the root directory and add these variables with your API keys.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
