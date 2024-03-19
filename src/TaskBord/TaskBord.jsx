import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";

const TaskBord = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description: "Connect an existing API to a third-party database using",
    tags: ["web", "Reacat", "js"],
    priority: "High",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const handleAddTask = (task, isAdd) => {
    console.log("added task", task);
    if (isAdd) {
      setTasks([...tasks, task]);
      setShowModal(false);
    } else {
      setTasks(
        tasks.map((d) => {
          if (d.id === task.id) {
            return task;
          }
          return task;
        })
      );
      setShowModal(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  const handleEditTask = (task) => {
    console.log("task Edit", task);
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleDeletTask = (id) => {
    console.log("taskAfterDelet task", id);
    const taskAfterDelet = tasks.filter((task) => task.id !== id);
    setTasks(taskAfterDelet);
  };

  const handleDeletAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFav = (id) => {
    console.log("click", id);
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  };

  const handleSearch = (searchTrem) => {
    console.log(searchTrem);
    const filtered = tasks.filter((task) =>
      task.title.toLocaleLowerCase().includes(searchTrem.toLocaleLowerCase())
    );
    setTasks([...filtered])
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          closeModal={handleClose}
          taskToUpdate={taskToUpdate}
        ></AddTaskModal>
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch}></SearchTask>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            handleAddTask={() => setShowModal(true)}
            handleDeletAll={handleDeletAll}
          ></TaskAction>
          <div className="overflow-auto">
            {tasks.length > 0 ?  (<TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              handleDeletTask={handleDeletTask}
              onFav={handleFav}
            ></TaskList>): (<NoTaskFound></NoTaskFound>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBord;
