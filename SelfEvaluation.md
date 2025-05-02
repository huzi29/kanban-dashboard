# Self-Evaluation Document

## a. Half-Page Summary

This project is a Kanban Dashboard built using Next.js (App Router), TypeScript, Tailwind CSS, and `@hello-pangea/dnd` for modern drag-and-drop functionality. It features the ability to add tasks and drag them across status columns "To Do", "In Progress", and "Done". The backend is mocked using json-server running locally.

## The Good:  
- Component driven architecture with clear separation of concerns in components like (`AddTask`, `Column`, etc.).
- Proper use of TypeScript to define and enforce task structures and status types.
- Clean and responsive UI using Tailwind CSS.
- Updated drag-and-drop solution using `@hello-pangea/dnd`, a community-maintained alternative to `react-beautiful-dnd`.

## The Bad:
- Some type coercion (e.g., handling string-to-enum conversion) could be more robust.
- No real backend persistence tasks reset on server restart.
- Lack of user feedback on errors or successful operations (e.g., no toasts or status indicators).

## Areas for Improvement: 
- Task editing and deletion features are not implemented.
- Drag-and-drop logic is tightly coupled with the `Column` component.
- No priorities, No filtering, sorting, or search features for large task boards.


## b. Self-Criticism

- Form Type Handling: Some loose type casting (e.g., converting form string values to enums) makes the code prone to runtime issues.
- Reusability: Certain logic such as status lists or string constants are duplicated rather than centralized.
- State Management: Lifting state up for `onStatusChange` works, but for larger apps a more scalable solution (e.g., Zustand, Redux) would be better.
- No Unit Tests: The app lacks tests, making it harder to catch regressions.


## c. Improvements

If I had more time, I would:
- Add editing and deletion for tasks.
- Introduce toast notifications for feedback.
- Centralize constants like status types.
- Refactor drag-and-drop logic into a custom hook for better separation.
- Replace `json-server` with an actual backend like Express + MongoDB for persistent data storage.
- Add full unit and integration tests.


## d. Technology Rating (out of 10)

| Technology                | Self-Rating |
|---------------------------|-------------|
| Next.js                   | 9 / 10      |
| Tailwind CSS              | 8 / 10      |
| TypeScript                | 7 / 10      |
| @hello-pangea/dnd         | 7 / 10      |
| json-server (for mock API)| 8 / 10      |