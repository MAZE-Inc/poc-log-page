import React, { useState, useEffect } from "react";

export const EventLog = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // const wss = new WebSocket("wss://cbb5-183-99-2-118.ngrok-free.app/wss");

    const wss = new WebSocket("ws://localhost:8000/wss");

    wss.onmessage = (event) => {
      if (JSON.parse(event.data).domain === "event") {
        setMessages((prevMessages) => [
          {
            time: JSON.parse(event.data).time,
            msg: JSON.parse(event.data).msg,
          },
          ...prevMessages,
        ]);
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
