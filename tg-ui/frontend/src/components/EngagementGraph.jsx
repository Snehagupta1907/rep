import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EngagementGraph = () => {
  const organicData = [
    { date: "2024-11-01", value: 120 },
    { date: "2024-11-02", value: 135 },
    { date: "2024-11-03", value: 150 },
    { date: "2024-11-04", value: 180 },
    { date: "2024-11-05", value: 170 },
    { date: "2024-11-06", value: 190 },
    { date: "2024-11-07", value: 200 },
    { date: "2024-11-08", value: 220 },
    { date: "2024-11-09", value: 230 },
    { date: "2024-11-10", value: 240 },
    { date: "2024-11-11", value: 250 },
    { date: "2024-11-12", value: 260 },
    { date: "2024-11-13", value: 275 },
    { date: "2024-11-14", value: 280 },
  ];

  const paidData = [
    { date: "2024-11-01", value: 90 },
    { date: "2024-11-02", value: 95 },
    { date: "2024-11-03", value: 110 },
    { date: "2024-11-04", value: 120 },
    { date: "2024-11-05", value: 115 },
    { date: "2024-11-06", value: 140 },
    { date: "2024-11-07", value: 145 },
    { date: "2024-11-08", value: 160 },
    { date: "2024-11-09", value: 170 },
    { date: "2024-11-10", value: 175 },
    { date: "2024-11-11", value: 180 },
    { date: "2024-11-12", value: 190 },
    { date: "2024-11-13", value: 195 },
    { date: "2024-11-14", value: 200 },
  ];

  const data = {
    labels: organicData.map((d) => new Date(d.date).toLocaleDateString()),
    datasets: [
      {
        label: "Organic Engagement",
        data: organicData.map((d) => d.value),
        borderColor: "#4BC0C0",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Paid Engagement",
        data: paidData.map((d) => d.value),
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#FFFFFF",
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Engagement Metrics",
        color: "#FFFFFF",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        titleColor: "#FFFFFF",
        backgroundColor: "#333333",
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 12 },
        borderColor: "#555555",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#FFFFFF",
          font: {
            size: 14,
            weight: "500",
          },
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Engagement",
          color: "#FFFFFF",
          font: {
            size: 14,
            weight: "500",
          },
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6">
        <div className="h-96 w-full">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default EngagementGraph;
