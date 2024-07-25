import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
  

const Dropdown = ({onChangeHandler, defaultValue, placeholder, dropdownItems}) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={defaultValue}>
        <SelectTrigger className="select-field">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {
                dropdownItems.length>0 && dropdownItems.map((item) => (
                    <SelectItem key={item._id ? item._id : item.id} value={item.muscle ? item.muscle : item.label} className="select-item p-regular-14">{item.muscle ? item.muscle : item.label}</SelectItem>
                ))
            }
        </SelectContent>
    </Select>
  )
}

export default Dropdown