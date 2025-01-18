import { Priority, TCategory, TPriority } from "@/types/todo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SelectFieldProps {
  id: number;
  value?: string;
  contents: string[];
  placeholder: string;
  onValueChange: (id: number, category: TCategory) => void;
}

// Function to check if a value is a valid TCategory
const isPriority = (value: unknown) => {
  return Priority.includes(value as TPriority);
};

const SelectField = ({
  id,
  value,
  contents,
  placeholder,
  onValueChange,
}: SelectFieldProps) => {
  return (
    <Select
      onValueChange={(value) => onValueChange(id, value)}
      defaultValue={value}
    >
      <SelectTrigger
        className={`${
          isPriority(value) && value === "High"
            ? "bg-red-300"
            : isPriority(value) && value === "Medium"
            ? "bg-blue-300"
            : "bg-gray-300"
        } rounded-full py-0 px-3 text-xs inline-flex`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {contents.map((content, i) => (
          <SelectItem value={content} key={i}>
            {content}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectField;
