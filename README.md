### React Redux Crash - 2023

## Pure Components

1. We can create a component by extending the Pure component class.
2. Pure component implements shouldComponentUpdate with a shallow prop and state comparison.
3. Shallow comparison means that it will check the values of the first level properties.
4. If the first level properties are same then the component is not re-rendered.
5. If the first level properties are objects then the reference should be same.
6. Pure components are useful when the application has immutable data.

## React Memo

1. React.memo is a higher order component.
2. React.memo is similar to React.PureComponent but for function components instead of classes.
3. If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result.
4. This means that React will skip rendering the component, and reuse the last rendered result.

## Refs in React

1. Refs are used to get reference to a DOM node or an instance of a component in React.
2. We use refs in cases where we want to change the value of a child component, without making use of props and all.
3. We can use refs in cases where we want to focus on a particular element.
4. We can use refs in cases where we want to trigger imperative animations.
5. We can use refs in cases where we want to integrate third party libraries in our application.
6. We can use refs in cases where we want to integrate with DOM elements.

## What are Hooks?

1. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
2. Hooks are functions that let you “hook into” React state and lifecycle features from function components.
3. Hooks don’t work inside classes — they let you use React without classes.
4. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.
5. Hooks are completely opt-in. You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.
