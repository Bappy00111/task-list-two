import React from "react";
import { FaStar } from "react-icons/fa";

const TaskList = ({ tasks,onEdit,handleDeletTask,onFav}) => {
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <thead>
        <tr>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
            {" "}
            Title{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
            {" "}
            Description{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
            {" "}
            Tags{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Priority{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Options{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr
            key={task.id}
            className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
          >
            <td>
              <button onClick={()=>onFav(task.id)}>
              {task.isFavorite ? (
                <FaStar className="text-yellow-300" />
              ) : (
                <FaStar className="text-gray-400" />
              )}
              </button>
            </td>
            <td>{task.title}</td>
            <td>
              <div>{task.description}</div>
            </td>
            <td>
              <ul className="flex justify-center gap-1.5 flex-wrap">
                {task.tags.map((e) => (
                  <li key={e}>
                    <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                      {e}
                    </span>
                  </li>
                ))}
              </ul>
            </td>
            <td className="text-center">{task.priority}</td>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <button onClick={()=>handleDeletTask(task.id)} className="text-red-500">Delete</button>
                <button onClick={()=>onEdit(task)} className="text-blue-500">Edit</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
