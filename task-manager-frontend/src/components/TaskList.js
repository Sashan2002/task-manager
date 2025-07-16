// // src/components/TaskList.js
// import TaskCard from './TaskCard';

// const TaskList = ({ tasks, onUpdate, onDelete }) => {
//   return (
//     <div>
//       {tasks.map(task => (
//         <TaskCard key={task._id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
//       ))}
//     </div>
//   );
// };

// export default TaskList;


// src/components/TaskList.js
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
