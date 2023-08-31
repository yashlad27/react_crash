### React Redux Crash - 2023

---
## Pure Components: 
1. We can create a component by extending the Pure component class.
2. Pure component implements shouldComponentUpdate with a shallow prop and state comparison.
3. Shallow comparison means that it will check the values of the first level properties.
4. If the first level properties are same then the component is not re-rendered.
5. If the first level properties are objects then the reference should be same.
6. Pure components are useful when the application has immutable data.

## React Memo: 
1. React.memo is a higher order component.
2. React.memo is similar to React.PureComponent but for function components instead of classes.
3. If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result.
4. This means that React will skip rendering the component, and reuse the last rendered result.
