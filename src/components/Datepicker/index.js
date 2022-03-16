import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Datepicker({
  children,
  placeholder = "Select date",
  className,
  value,
  ...restProps
}) {
  const [selectedDate, setSelectedDate] = React.useState(value || new Date());
  return (
    <div className={className}>
      <DatePicker
        placeholderText={placeholder}
        selected={selectedDate}
        onChange={setSelectedDate}
        {...restProps}
      />
    </div>
  );
}

function DatePickerRange({ startDate, endDate, ...restProps }) {
  const [startDateValue, setStartDate] = React.useState(
    startDate || new Date()
  );
  const [endDateValue, setEndDate] = React.useState(endDate || new Date());
  const onChange = ([start, end]) => {
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Datepicker
      startDate={startDateValue}
      endDate={endDateValue}
      selectsRange
      onChange={onChange}
      {...restProps}
    />
  );
}

Datepicker.Range = DatePickerRange;
Datepicker.Time = (props) => (
  <Datepicker dateFormat="dd/MM/yyyy h:mm aa" {...props} showTimeSelect />
);
