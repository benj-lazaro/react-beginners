// Function-based React component

// Function component that returns a JSX (JavaScript XML) element
function Message() {
    const name = "";

    if (name) 
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

// Export component as a default object from this module
export default Message;
