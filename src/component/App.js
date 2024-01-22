import React, { useEffect } from "react";
import { Blueprint } from "./component/Blueprint";
import { Dashboard } from "./component/Dashboard";
import { EventLog } from "./component/EventLog";

function App() {
  const today = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const [statusData, setStatusData] = useState(null);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    // const wss = new WebSocket("ws://localhost:8000/wss");
    const wss = new WebSocket("wss://8b2a-183-99-2-118.ngrok-free.app/wss");

    wss.onmessage = (status) => {
      const data = JSON.parse(status.data);
      console.log(data);
      if (data.type === "event") {
        setEventData(data);
      } else {
        setStatusData(data.status);
      }
    };

    // 웹소켓 오류 및 연결 종료 처리
    wss.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    wss.onclose = () => {
      console.log("WebSocket connection closed");
    };

    wss.onopen = () => {
      console.log("열렸당");
    };

    return () => {
      wss.close();
    };
  }, []);

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
        <Dashboard data={statusData} />
        <EventLog data={eventData} />
      </div>
    </div>
  );
}

export default App;
