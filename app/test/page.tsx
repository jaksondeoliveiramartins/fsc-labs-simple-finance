"use client";

import MonthYearPicker from "../_components/MonthYearPicker";
import ThemeToggleBar from "../_components/ThemeToggle";
import IPeriod from "../_interfaces/IPeriod";

export default function ComponentTest() {
  const handleSelectedMonth = (period: IPeriod) => {
    console.log(period.startDate);
    console.log(period.endDate);
  };

  return (
    <div>
      <ThemeToggleBar />
      <MonthYearPicker handleOnClick={handleSelectedMonth} />
    </div>
  );
}
