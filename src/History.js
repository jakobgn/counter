import { useSelector } from "react-redux";

function History() {
  const { history } = useSelector((state) => state.counter);
  return (
    <>
      <h1>History</h1>
      <ul>
        {history.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </>
  );
}

export default History;
