import React from "react";
import { Order } from "../types";

interface FilterProps {
  filterStatus: "All" | Order["status"];
  setFilterStatus: React.Dispatch<React.SetStateAction<"All" | Order["status"]>>;
}

const Filter: React.FC<FilterProps> = ({ filterStatus, setFilterStatus }) => {
  return (
    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as "All" | Order["status"])}>
      <option value="All">All</option>
      <option value="New">New</option>
      <option value="Picking">Picking</option>
      <option value="Delivering">Delivering</option>
      <option value="Delivered">Delivered</option>
    </select>
  );
};

export default Filter;
