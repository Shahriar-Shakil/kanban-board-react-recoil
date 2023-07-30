import { Select } from "antd";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterState, usersState } from "../../recoil/atoms";

export default function Filtering() {
  const users = useRecoilValue(usersState);
  const [filter, setFilter] = useRecoilState(filterState);
  const handleFilterChange = (value) => {
    setFilter({ ...filter, assignedTo: value });
  };
  const handleClear = () => {
    setFilter({ ...filter, assignedTo: null });
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row  items-center gap-2">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Assign to
        </label>
        <div className="mt-1">
          <Select
            onClear={handleClear}
            onChange={handleFilterChange}
            allowClear
            style={{ width: "200px" }}
            value={filter?.assignedTo}
            placeholder="All"
          >
            {users?.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
