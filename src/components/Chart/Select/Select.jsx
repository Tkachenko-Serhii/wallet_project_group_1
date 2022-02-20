import React, { useState } from "react";
import { styled } from "@mui/material";
import Select from "react-select";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

import { selectStyles } from "./selectStyles";

const currentMonth = new Date().getMonth() + 1;
const months = Array.from({ length: 12 }, (item, i) => {
  return format(new Date(0, i), "LLLL", {
    locale: ru,
  });
});

const monthOptions = Array(12)
  .fill(null)
  .map((item, index) => ({ value: index + 1, label: months[index] }));

const currentYear = new Date().getFullYear();
const years = [];
for (let i = currentYear; i >= 2018; i--) {
  years.push({ value: i, label: i.toString() });
}

function TableFilters() {
  const [date, setDate] = useState({
    month: currentMonth,
    year: currentYear,
  });

  const updateDate = (name, value) => {
    setDate((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <Select
        styles={selectStyles}
        options={monthOptions}
        placeholder="Месяц"
        onChange={(option) => {
          updateDate("month", option.value);
        }}
        isSearchable={false}
        defaultValue={monthOptions.find((month) => month.value === date.month)}
      />
      <Select
        styles={selectStyles}
        options={years}
        placeholder="Год"
        onChange={(option) => {
          updateDate("year", option.value);
        }}
        isSearchable={false}
        defaultValue={years.find((year) => year.value === date.year)}
      />
    </Container>
  );
}

export default TableFilters;

const Container = styled("div")`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: auto;
  width: 350px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-right: auto;
    flex-direction: column;
    max-width: 280px;
  }
`;
