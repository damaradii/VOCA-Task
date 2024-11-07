import React from "react";
import check from "../../assets/checkpurple.svg";
import trash from "../../assets/trash.svg";

function TaskPost({ title }) {
  return (
    <div className="flex bg-[#15101C] p-4 rounded-lg mb-2">
      <div className="text-[#9E78CF] flex-1 text-left">
        <h1>{title}</h1>
      </div>
      <div className="flex items-center justify-end">
        <div className="mx-2">
          <button>
            <img src={check} alt="check" className="w-4 h-4" />
          </button>
        </div>
        <div className="mx-2">
          <button>
            <img src={trash} alt="trash" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskPost;
