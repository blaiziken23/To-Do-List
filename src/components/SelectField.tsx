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
  onValueChange: (id: number, value: string) => void;
}

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
          value === "High"
            ? "bg-red-300"
            : value === "Medium"
            ? "bg-blue-300"
            : value === "Low"
            ? "bg-gray-300"
            : ""
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
