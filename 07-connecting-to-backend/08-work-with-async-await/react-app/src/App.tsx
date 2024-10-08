import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  // State hook
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  // Effect hook
  useEffect(() => {
    // Async function
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/xusers"
        );

        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
