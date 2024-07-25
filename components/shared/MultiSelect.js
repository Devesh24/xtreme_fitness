"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const MultiSelect = ({
  onChangeHandler,
  value,
  placeholder,
  dropdownItems,
}) => {

  const [updatedValue, setUpdatedValue] = useState(value);
  const handleCheckboxChange = (item, isChecked) => {
    let newArray;
    if (isChecked) {
      newArray = [...updatedValue, item];
      setUpdatedValue((prev) => [...prev, item]);
    } else {
      newArray = updatedValue.filter((val) => val !== item);
      setUpdatedValue((prev) => prev.filter((val) => val !== item));
    }
    onChangeHandler(newArray);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="select-field">
        {placeholder || "Select"}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Items</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropdownItems.map((item) => (
          <DropdownMenuCheckboxItem
            key={item._id ? item._id : item.id}
            checked={updatedValue.includes(item.muscle ? item.muscle : item.label)}
            onCheckedChange={(isChecked) =>
              handleCheckboxChange(item.muscle ? item.muscle : item.label, isChecked)
            }
          >
            {item.muscle ? item.muscle : item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MultiSelect;
