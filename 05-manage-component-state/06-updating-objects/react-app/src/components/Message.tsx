let count = 0;

const Message = () => {
  // Gray colored output in the console means that it is coming from the Strict mode
  console.log("Message called ", count)
  count++; 
  return (
    <div>Message {count}</div>
  )
}

export default Message