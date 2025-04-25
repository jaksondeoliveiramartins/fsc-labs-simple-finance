"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Months } from "../_types/months";
import IPeriod from "../_interfaces/IPeriod";

interface MonthYearPickerProps {
  handleOnClick: (period: IPeriod) => void;
}

const MonthYearPicker = ({ handleOnClick }: MonthYearPickerProps) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);

  const maxFutureYears = 100;
  const startYear = 1900;
  const endYear = currentYear + maxFutureYears;

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i,
  );

  const handlePreviousYear = () => {
    if (selectedYear !== startYear) {
      const selectedIndexYear = years.indexOf(selectedYear);
      const previousIndexYear = selectedIndexYear - 1;
      const previuosYear = years[previousIndexYear];
      setSelectedYear(previuosYear);
    }
  };

  const handleNextYear = () => {
    if (selectedYear !== endYear) {
      const selectedIndexYear = years.indexOf(selectedYear);
      const nextIndexYear = selectedIndexYear + 1;
      const nextYear = years[nextIndexYear];
      setSelectedYear(nextYear);
    }
  };
  const getPeriod = (monthIndex: number, year: number) => {
    const startDate = new Date(year, monthIndex - 1, 1); // Mês começa em 0, por isso o "- 1"
    const endDate = new Date(year, monthIndex, 0); // O dia 0 do próximo mês é o último dia do mês atual
    return { startDate, endDate };
  };
  return (
    <div className="myp-container">
      <div className="myp-year">
        <div className="myp-year-left-selector" onClick={handlePreviousYear}>
          <ChevronLeft />
        </div>
        <div className="myp-year-number">{selectedYear}</div>
        <div className="myp-year-right-selector" onClick={handleNextYear}>
          <ChevronRight />
        </div>
      </div>
      <div className="myp-months">
        {Months.map((month) => (
          <div
            key={month.index}
            className="myp-month"
            onClick={() => handleOnClick(getPeriod(month.index, selectedYear))}
          >
            {month.short}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthYearPicker;
