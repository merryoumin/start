import axios from "axios";

const FunOthers = ({ title, isDone, index, setToDoList }) => {
  const onClickToggle = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/todo/done/${index}`
      );

      if (response.status != 200) {
        alert("요청 X");
        return;
      }

      setToDoList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${index}`
      );
      if (response.status != 200) {
        alert("요청 X");
        return;
      }

      setToDoList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isDone ? (
        <li className="flex my-4" onClick={onClickToggle}>
          <div className="relative">
            <div className="border-4 border-yellow-300 w-8 h-8 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white bg-yellow-300 w-8 h-8 scale-75 rounded-xl"></div>
          </div>
          <div className="text-2xl ml-4">{title}</div>
          <button onClick={onClickDelete}>X</button>
        </li>
      ) : (
        <li className="flex my-4" onClick={onClickToggle}>
          <div className="border-4 border-yellow-300 w-8 h-8 rounded-xl"></div>
          {/* line-through */}
          <div className="text-2xl ml-4">{title}</div>
          <button onClick={onClickDelete}>X</button>
        </li>
      )}
    </>
  );
};

export default FunOthers;
