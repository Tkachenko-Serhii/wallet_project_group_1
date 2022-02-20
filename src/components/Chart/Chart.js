import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import DiagramTab from "./DiagramTab";
import getStatistic from "./../../API/getStatistic";

ChartJS.register(ArcElement, Tooltip, Legend);

const inputData = {
  categories: [
    {
      name: "Машина",
      color: "red",
      total: 10,
    },
    {
      name: "Книги",
      color: "green",
      total: 20,
    },
    {
      name: "Развитие",
      color: "blue",
      total: 30,
    },
    {
      name: "Спорт",
      color: "teal",
      total: 30,
    },
    {
      name: "Налоги",
      color: "orange",
      total: 40,
    },
  ],
  total: {
    Expenses: 130,
    Income: 50000,
  },
};

const arrName = [];
const arrTotal = [];
const arrColor = [];

inputData.categories.forEach((item) => {
  arrName.push(item.name);
  arrTotal.push(item.total);
  arrColor.push(item.color);
});

const data = {
  labels: [...arrName],

  datasets: [
    {
      label: "# of Votes",
      data: [...arrTotal],
      backgroundColor: [...arrColor],
      borderWidth: 0,
      cutout: 95,
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "24000",
    },
    legend: {
      display: false,
    },
  },
};

export default function Chart() {
  const [statistic, setStatistic] = useState([]);

  useEffect(() => {
    getStatistic().then((data) => setStatistic(data));
  }, []);

  return (
    <>
      <Wrapper>
        <Title>Статистика</Title>
        <RightTab>
          <ChartBlock>
            <Doughnut data={data} options={options} />
          </ChartBlock>
          <LegendWrapper>
            <DiagramTab data={inputData} />
          </LegendWrapper>
        </RightTab>
      </Wrapper>
    </>
  );
}

const Wrapper = styled("div")`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 769px) {
    display: block;
    width: 700px;
  }
`;

const ChartBlock = styled("div")`
  max-width: 280px;
  max-height: 280px;

  @media screen and (min-width: 769px) {
    width: 320px;
    height: 320px;
    margin-right: 30px;
  }
`;

const RightTab = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    align-items: auto;
    justify-content: space-between;
    width: 700px;
    margin-left: 30px;
  }
`;

const Title = styled("p")`
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 20px;

  @media screen and (min-width: 769px) {
    margin-left: 30px;
  }
`;

const LegendWrapper = styled("div")`
  width: 280px;

  @media screen and (min-width: 769px) {
    width: 350px;
  }
`;
