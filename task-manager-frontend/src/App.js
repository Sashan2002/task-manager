// // src/App.js
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';
// import { useTasks } from './hooks/useTasks';

// function App() {
//   const { tasks, loading, error, createTask, updateTask, deleteTask } = useTasks();

//   return (
//     <div className="text-3xl font-bold underline text-blue-600">
//       <h1>Task Manager</h1>
//       <TaskForm onCreate={createTask} />
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
//     </div>
//   );
// }

// export default App;


// src/App.js
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useTasks } from './hooks/useTasks';

function App() {
  const { tasks, loading, error, createTask, updateTask, deleteTask } = useTasks();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Task Manager</h1>
      <div className="max-w-xl mx-auto">
        <TaskForm onCreate={createTask} />
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
