// // src/components/TaskCard.js
// const TaskCard = ({ task, onUpdate, onDelete }) => {
//   return (
//     <div>
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       <p>Status: {task.status}</p>
//       <button onClick={() => onUpdate(task._id, { status: task.status === 'pending' ? 'completed' : 'pending' })}>
//         {task.status === 'pending' ? 'Mark Completed' : 'Mark Pending'}
//       </button>
//       <button onClick={() => onDelete(task._id)}>Delete</button>
//     </div>
//   );
// };

// export default TaskCard;


// src/components/TaskCard.js
const TaskCard = ({ task, onUpdate, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      <p className="text-gray-600 mt-1">{task.description}</p>
      <p className={`mt-2 font-medium ${task.status === 'pending' ? 'text-yellow-500' : 'text-green-600'}`}>
        Status: {task.status}
      </p>
      <div className="mt-4 flex gap-2">
        <button
          className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
          onClick={() => onUpdate(task._id, { status: task.status === 'pending' ? 'completed' : 'pending' })}
        >
          {task.status === 'pending' ? 'Mark Completed' : 'Mark Pending'}
        </button>
        <button
          className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
