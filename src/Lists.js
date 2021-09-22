const Lists = () => {
  const tasks = [
    { id: "1", text: "Buy flowers", status: "todo" },
    { id: "2", text: "Go to the dentist", status: "done" },
    { id: "3", text: "Go to the school", status: "todo" },
  ];

  const tasksList = tasks.map((task) => {
    return (
      <p key={task.id}>
        {task.id}:{task.text} - {task.status}
      </p>
    );
  });

  return (
    <div>
      <center>
        <h3>Lists and Keys</h3>
        {tasksList}
      </center>
    </div>
  );
};

export default Lists;
<div></div>;
