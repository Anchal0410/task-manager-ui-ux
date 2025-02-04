import React, { useCallback } from "react";
import { Search, Filter } from "lucide-react";
import useTaskStore from "../../store/taskStore";

const TaskFilters = () => {
  const { filters, setFilters } = useTaskStore();

  const handleFilterChange = useCallback(
    (key, value) => {
      setFilters({ [key]: value });
    },
    [setFilters]
  );

  const debouncedSearch = useCallback(
    debounce((value) => handleFilterChange("search", value), 300),
    [handleFilterChange]
  );

  return (
    <div className="bg-white p-4 border-b">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          {/* <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search tasks..."
              onChange={(e) => debouncedSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
        </div>

        {/* <div className="flex gap-4">
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange("status", e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            <option value="Backlog">Backlog</option>
            <option value="In Progress">In Progress</option>
            <option value="Paused">Paused</option>
            <option value="Ready for Launch">Ready for Launch</option>
          </select>

          <select
            value={filters.assignee}
            onChange={(e) => handleFilterChange("assignee", e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Assignees</option>
            <option value="user1@example.com">User 1</option>
            <option value="user2@example.com">User 2</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default TaskFilters;
