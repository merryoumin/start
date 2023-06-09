import axios from "axios";
import { useState } from "react";

const FunPost = ({ getToDoList }) => {
  const [title, setTitle] = useState("");

  const onSubmitCreateToDo = async (e) => {
    try {
      e.preventDefault(); //서버 통신 중에 유지

      if (!title) {
        alert("타이틀을 입력해주세요!");
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/todo`,
        {
          title,
          desc: `${title} 아자아자 화이팅`,
        }
      );

      console.log(response);
      getToDoList();
      setTitle("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="flex mt-2" onSubmit={onSubmitCreateToDo}>
      <input
        className="grow border-2 border-yellow-200 rounded-lg focus:outline-green-200 px-2 py-1 text-ig"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="ml-4 px-2 py-1 bg-yellow-300 hover:bg-green-200 rounded-lg text-gray-50"
        type="submit"
        value="NEW TODO"
      />
    </form>
  );
};

export default FunPost;
