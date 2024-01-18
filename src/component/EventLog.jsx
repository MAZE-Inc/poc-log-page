import React, { useState, useEffect } from "react";

export const EventLog = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const wss = new WebSocket("wss://0fb7-112-168-255-194.ngrok-free.app/wss");

    // const wss = new WebSocket("ws://localhost:8000/wss");

    wss.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const time = new Date(data.timestamp);
      console.log(time);

      if (data.type === "event") {
        if (data.area_type === "in") {
          setMessages((prevMessages) => [
            {
              time:
                time.getFullYear() +
                "년 " +
                (time.getMonth() + 1) +
                "월 " +
                time.getDate() +
                "일 " +
                time.getHours() +
                "시 " +
                time.getMinutes() +
                "분" +
                time.getSeconds() +
                "초",
              msg:
                (data.first_visit
                  ? "[첫방문] "
                  : "1월 " +
                    data.last_visit_time.slice(8, 10) +
                    "일 " +
                    data.last_visit_time.slice(11, 13) +
                    "시 " +
                    data.last_visit_time.slice(14, 16) +
                    "분에 방문 했던 ") +
                data.user_id +
                "번 회원이 매장에 들어왔습니다.",
            },
            ...prevMessages,
          ]);
        } else if (data.area_type === "out") {
          setMessages((prevMessages) => [
            {
              time:
                time.getFullYear() +
                "년 " +
                (time.getMonth() + 1) +
                "월 " +
                time.getDate() +
                "일 " +
                time.getHours() +
                "시 " +
                time.getMinutes() +
                "분" +
                time.getSeconds() +
                "초",
              msg: data.user_id + "번 회원이 나갔습니다",
            },
            ...prevMessages,
          ]);
        } else if (data.area_type === "internal") {
          setMessages((prevMessages) => [
            {
              time:
                time.getFullYear() +
                "년 " +
                (time.getMonth() + 1) +
                "월 " +
                time.getDate() +
                "일 " +
                time.getHours() +
                "시 " +
                time.getMinutes() +
                "분" +
                time.getSeconds() +
                "초",
              msg:
                data.user_id +
                "번 회원이 " +
                (data.data.from_zone_id === "area_1"
                  ? "창가 테이블"
                  : "냉장고") +
                "에서 " +
                (data.data.to_zone_id === "area_1" ? "창가 테이블" : "냉장고") +
                "로 이동했습니다.",
            },
            ...prevMessages,
          ]);
        }
      }
    };
    return () => {
      wss.close();
    };
  }, []);

  return (
    <div style={{ flex: 1, overflow: "scroll" }}>
      <div>
        {messages.map((item, index) => (
          <div>
            <p
              style={{
                fontSize: 25,
              }}
            >
              <strong>[{item.time}]</strong>
            </p>
            <p
              key={index}
              style={{
                fontSize: 20,
              }}
            >
              {item.msg}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
