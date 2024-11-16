import plus from "../../assets/plus.svg";
import { useFormTask } from "../../config/formTask";
import { usePostTask } from "../../config/postTask";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function InputForm({ className }) {
  const { getPostsById, addPost } = usePostTask();
  const { form, setFormData } = useFormTask();
  const { title } = form;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const post = await getPostsById(id);
        if (post) setFormData("title", post.title);
      };
      fetchData();
    }
  }, [id, getPostsById, setFormData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(form);
    setFormData("title", "");
  };

  return (
    <form className="space-y-6 w-full" action="#" method="POST">
      <div className="flex items-center w-full">
        <input
          id="formTask"
          name="formTask"
          type="text"
          placeholder="Add a new task"
          autoComplete="off"
          value={title}
          onChange={(e) => setFormData("title", e.target.value)}
          required
          className={`${className} p-3 h-9 w-full block rounded-md border-0 text-white ring-1 
          ring-[#916bc9] placeholder:text-gray-400 sm:text-sm/6 bg-[#1D1825]`}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex items-center w-11 h-9 justify-center rounded-lg bg-[#916bc9] hover:bg-[#6a4d95] ml-3"
        >
          <img src={plus} alt="plus icon" className="w-5" />
        </button>
      </div>
    </form>
  );
}

export default InputForm;
