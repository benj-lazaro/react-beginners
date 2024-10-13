let count = 0;

// Intentionally implemented impure function
const Message = () => {
  console.log("Message component called ", count); // Proof that Strict mode renders this component twice
  count++; // Changing the value of a variable prior to rendering = impure behavior
  return <div>Message {count}</div>;
};

// Export component as a default object from this module
export default Message;
