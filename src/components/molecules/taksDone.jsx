function TaskDone({ props }) {
  const { title } = props;
  return (
    <div className="flex bg-[#15101C] p-4 rounded-lg mt-2">
      <div className="text-[#78CFB0] flex-1 text-left line-through  ">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default TaskDone;
