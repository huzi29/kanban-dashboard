# Kanban Dashboard

A simple drag-and-drop Kanban board built with Next.js, Typed with TypeScript, styled with Tailwind CSS, and @hello-pangea/dnd. Tasks are stored and served locally using json-server.


## Features

- View tasks grouped by status: To Do, In Progress, Done
- Add new tasks with a title, description, and initial status
- Drag and drop tasks between columns
- Tasks persist using a local JSON server (`db.json`)
- After each operation (add/move), loadTasks() is called to sync the local state with the backend.

## Tech Stack

- Next.js (App Router) - A modern React framework for routing and SSR
- TypeScript - Static typing for JavaScript
- State Management - useState & useEffect for local state handling.
- Tailwind CSS - For fast and responsive styling
- @hello-pangea/dnd - Drag-and-drop functionality
- json-server - Mock backend for task storage

## Installation

1.Clone the repository
git clone https://github.com/huzi29/kanban-dashboard.git
cd kanban-dashboard

2.Install dependencies
npm install

3.Start the development server
npm run dev

4.Open your browser to http://localhost:3000 to view the app and for the backend mock server visit http://localhost:4000/tasks

5.To stop the development server, press Ctrl+C in the terminal where it's running.

6.To build the production version of the app:
npm run build

7.Deployed on Vercel
https://kanban-dashboard-delta.vercel.app/