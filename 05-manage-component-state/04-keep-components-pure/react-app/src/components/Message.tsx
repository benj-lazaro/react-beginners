

const Message = () => {
  let count = 0;
  count++;
  
  return (
    // The value of variable count ALWAYS return the same value
    <div>Message {count}</div>
  )
}

export default Message