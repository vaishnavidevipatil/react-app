# react-app
project using react js and learning purpose

useRef
The `useRef` hook in React is a powerful tool that allows you to create a mutable reference that persists across re-renders. It can be used to access DOM elements directly or to store any mutable value that you want to keep between renders without causing a re-render when it changes.

useContext
The `useContext` hook in React is used to access the value of a context directly within a functional component. It allows you to share data across the component tree without having to pass props down manually at every level. This is particularly useful for global state management, theming, and other scenarios where you want to avoid prop drilling.

useMemo
The `useMemo` hook in React is used to optimize performance by memoizing the result of a computation. It allows you to cache the result of a function so that it is only recomputed when its dependencies change. This is particularly useful for expensive calculations or operations that you don't want to run on every render.

useReducer
The `useReducer` hook in React is a powerful alternative to `useState` for managing complex state logic. It is inspired by the Redux pattern and allows you to manage state transitions using a reducer function. This hook is particularly useful when you have multiple related state variables or when the next state depends on the previous state.

To run this react app, follow these steps:
1. npm start
2. npx json-server --watch db.json --port 5000

Learnings:
1. Understanding of React hooks and their use cases.
2. State management using useReducer.

In card 1, I learned about the useRef hook and its applications in accessing DOM elements and storing mutable values.

In card 2, I explored the useContext hook, which helped me understand how to share data across components without prop drilling.

In card 3, I delved into the useMemo hook, learning how to optimize performance by memoizing expensive computations.

In card 4, I studied the useReducer hook, which provided insights into managing complex state logic in a more structured way.

