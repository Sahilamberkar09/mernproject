const TodoTable = () => {
  return (
    <div className="flex-1 p-4 bg-white shadow-md rounded-lg">
      <table className="w-full border-collapse mt-5">
        <thead>
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-left bg-gray-100 font-bold">
              Task
            </th>
            <th className="border border-gray-300 px-3 py-2 text-left bg-gray-100 font-bold">
              Description
            </th>
            <th className="border border-gray-300 px-3 py-2 text-left bg-gray-100 font-bold">
              Date
            </th>
            <th className="border border-gray-300 px-3 py-2 text-left bg-gray-100 font-bold">
              Time
            </th>
          </tr>
        </thead>
        <tbody>{/* Map through your todo items and display them here */}</tbody>
      </table>
    </div>
  );
};

export default TodoTable;
