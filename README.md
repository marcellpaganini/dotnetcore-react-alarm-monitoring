# react-telecom-remote-monitoring    

## Built With  
* [TypeScript](https://www.typescriptlang.org/docs/// "TypeScript documentation")  
* [React](https://reactjs.org// "React Documentation")  

## Getting Started  
### Prerequisites
* [Node.js](https://nodejs.org/en/ "Download Node.js 16.15.0 LTS")  

### Project Setup (VS Code)
* React  
  * Create React .gitignore file  
  ```bash
  npx react-gitignore
  ``` 
  * Create React App  
  ```bash
  npx create-react-app . --template typescript
  ```   
  * Delete all files in the src/ folder  
  * Add index.js  
  * Add these lines on top of the index.js file  
  ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
  ```  
  * Run the project and open http://localhost:3000
  ```bash
  npm start
  ```   

### React Topics practiced to get things done  
- Function components with TypeScript   
- useState hook with TypeScript 
- Event handling with Typescript  
- Context API with Typescript

### Project idea taken from:  
![alt text](https://www.ttgint.com/wp-content/uploads/2021/06/3-1.png)

### Error messages for future reference
❌Parameter 'e' implicitly has an 'any' type.  
**Solution** Check the event type in the event parameter of the tag, then add it to the 'e' being passed in the function.  
❌TypeError: Ajv is not a constructor.   
**Solution** Delete node_modules folder, `npm i` and restart VSCode.    
❌Type 'Date' is not assignable to type 'ReactNode'.   
**Solution** Objects, with the exception of React Elements, are not valid as children. Format the object to string type instead.   
🔼Typescript🔼   
✖Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect...  
**Solution** Property didn't need to be set as state. In case access current state while changing it is needed:  
```  
useEffect(() => {  
  setItems(currentItems => getCart(currentItems));  
}, []);
```  
✖Exception has occurred: TypeError: Cannot read properties of undefined (reading 'length')  
**Solution** Initialize array state properly. Array wasn't defined in React  
✖React Hook useEffect has a missing dependency: 'props.orders'. Either include it or remove the dependency array.  
**Solution** useEffect accepts multiple dependencies.    
✖Warning: You provided a value prop to a form field without an onChange handler. This will render a read-only field. If the field should be mutable use defaultValue. Otherwise, set either onChange or readOnly.   
**Solution** Add the onChange event handler.  
✖Uncaught Error: input is a void element tag and must neither have children nor use dangerouslySetInnerHTML.   
**Solution** The initial input value should be added to the value attribute.  
✖ Array.prototype.filter() expects a value to be returned at the end of arrow function  
**Solution** Add an else statement to the end of the function with a return null.   
✖ Array.prototype.map() is not a function.  
**Solution**  Add a check "?" to map: const beerList = beerListState.data?.map((beer) =>   
✖ Warning: Each child in a list should have a unique "key" prop.  
**Solution**  Add a key parameter to the component ```<Todo key={todo} todo={todo} />```  
✖ Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?    
**Solution** Add ```<>Components</>``` in the component return (fragment).  
✖ 'TodoList' is not defined.  
**Solution** Add ```import TodoList from './TodoList'``` to the file.  
✖ This component is not running in strict mode.  
**Solution**  Change ```root.render(<Game />);``` to ```  root.render(<React.StrictMode><Game /></React.StrictMode>);```  
✖ Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".  
**Solution:** Change ```import ReactDOM from 'react-dom';``` to ```import ReactDOM from 'react-dom/client';```  
✖ ERROR in Plugin "react" was conflicted between "package.json and BaseConfig.  
**Solution:** Open package.json and hit ctrl + save (temporary workaround). Changed directory structure that was case sensitive (real solution).
