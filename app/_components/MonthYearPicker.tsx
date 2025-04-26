"use client";

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Month, Months } from "../_types/months";
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

  const getPeriod = (month: Month, year: number) => {
    const startDate = new Date(year, month.index - 1, 1); // Mês começa em 0, por isso o "- 1"
    const endDate = new Date(year, month.index, 0); // O dia 0 do próximo mês é o último dia do mês atual
    setSelectorValue(month.name + "/" + year);
    setOpen(false);
    return { startDate, endDate };
  };

  const [isOpen, setOpen] = useState(false);
  const [selectorValue, setSelectorValue] = useState("Abril/2025");
  return (
    <div className="myp-container">
      <div className="myp-selector">
        <div className="myp-text-field-seletor">{selectorValue}</div>
        <button
          onClick={() => {
            setOpen(!isOpen);
          }}
          className="myp-button-selector"
        >
          <ChevronDown height={17} />
        </button>
      </div>
      <div className={`myp-month-year-container ${isOpen ? "flex" : "hidden"}`}>
        <div className="myp-year">
          <div className="myp-year-left-selector" onClick={handlePreviousYear}>
            <ChevronLeft height={20} />
          </div>
          <div className="myp-year-number">{selectedYear}</div>
          <div className="myp-year-right-selector" onClick={handleNextYear}>
            <ChevronRight height={20} />
          </div>
        </div>
        <div className="myp-months">
          {Months.map((month) => (
            <div
              key={month.index}
              className="myp-month"
              onClick={() => handleOnClick(getPeriod(month, selectedYear))}
            >
              {month.short}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthYearPicker;
