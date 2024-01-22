import React, { useState, useEffect } from "react";

export const Dashboard = ({ data }) => {
  const [female, setFemale] = useState(0);
  const [male, setMale] = useState(0);
  const [refrigerator, setRefrigerator] = useState(0);
  const [table, setTable] = useState(0);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   // const wss = new WebSocket("ws://localhost:8000/wss");
  //   const wss = new WebSocket("wss://8b2a-183-99-2-118.ngrok-free.app/wss");

  //   wss.onmessage = (status) => {
  //     const data = JSON.parse(status.data);
  //     console.log(data);
  //     if (data.type === "status" || data.type === "status2") {
  //       setFemale(data.data.female);
  //       setMale(data.data.male);
  //       setRefrigerator(data.data.refrigerator);
  //       setTable(data.data.table);
  //       setTotal(data.data.total);
  //     }
  //   };

  //   // 웹소켓 오류 및 연결 종료 처리
  //   wss.onerror = (error) => {
  //     console.error("WebSocket Error:", error);
  //   };

  //   wss.onclose = () => {
  //     console.log("WebSocket connection closed");
  //   };

  //   return () => {
  //     wss.close();
  //   };
  // }, []);

  return (
    <div style={{ flex: 0.7, textAlign: "center" }}>
      <div
        style={{
          fontSize: "2.5em",
          fontWeight: "800",
          marginTop: 0,
          marginBottom: "7%",
        }}
      >
        <span>매장 내 실시간 현황</span>
      </div>
      <div
        style={{
          margin: "7%",
          fontSize: 40,
          fontWeight: "600",
        }}
      >
        <span
          style={{
            marginRight: "5%",
          }}
        >
          남
        </span>
        <span
          style={{
            marginRight: "5%",
          }}
        >
          {male}
        </span>
        <span
          style={{
            marginRight: "5%",
          }}
        >
          여
        </span>
        <span>{female}</span>
      </div>
      <div
        style={{
          margin: "7%",
          fontSize: 40,
          fontWeight: "600",
        }}
      >
        <span
          style={{
            marginRight: "5%",
          }}
        >
          냉장고
        </span>
        <span>{refrigerator}</span>
      </div>
      <div
        style={{
          margin: "7%",
          fontSize: 40,
          fontWeight: "600",
        }}
      >
        <span
          style={{
            marginRight: "5%",
          }}
        >
          창가 테이블 구역
        </span>
        <span>{table}</span>
      </div>
      <div
        style={{
          margin: "7%",
          fontSize: 40,
          fontWeight: "600",
        }}
      >
        <span
          style={{
            marginRight: "5%",
          }}
        >
          누적 방문자 수
        </span>
        <span>{total}</span>
      </div>
    </div>
  );
};
