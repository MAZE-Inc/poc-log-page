import React from "react";
import { Blueprint } from "./component/Blueprint";
import { Dashboard } from "./component/Dashboard";
import { EventLog } from "./component/EventLog";

function App() {
  const today = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div style={{ marginLeft: "10%" }}>
      <div style={{ margin: "5%", textAlign: "center" }}>
        <h1>
          {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일{" "}
          {week[today.getDay()]}요일 매장 내 실시간 현황
        </h1>
        <h2>만월회</h2>
      </div>
      <div style={{ display: "flex", height: "50vh" }}>
        <Blueprint />
        <Dashboard />
        <EventLog />
      </div>
    </div>
  );
}

export default App;
