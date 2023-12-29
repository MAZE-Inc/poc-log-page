import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [dataList, setDataList] = useState([]);

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const response = await fetch('http://3.36.11.134:8000/data'); // 서버 URL을 입력하세요.
      const data = await response.json();
      setDataList(prevDataList => [...prevDataList, data]);
    } catch (error) {
      console.error('데이터를 불러오는데 실패했습니다:', error);
    }
  };

  // 마운트될 때와 5초마다 fetchData 함수를 호출
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
  }, []);

  // 화면에 데이터 리스트를 나열
  return (
    <div style={{padding: 20}}>
      <h1>2024년 12월 29일 매장 내 실시간 현황</h1>
      {dataList.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px', padding: '10px' }}>
          <p><strong>시각:</strong> {item.timestamp}</p>
          <p><strong>현재 매장 내 고객 목록:</strong> 'g_1', 'g_2', 'g_3', 'g_4'</p>
          <p><strong>이벤트 발생 목록</strong></p>
          {console.log(item.data.f)}
          <ul>
            <li>{item.type === 1 ? 
                      `${item.data.user_id}가 ${item.data.zone_id}에 관심을 보이고 있습니다.`:
                      `${item.data.user_id}가 ${item.data.from_zone_id}에서 ${item.data.to_zone_id}로 이동했습니다.`}
                      </li>
                      </ul>
          </div>
          ))}
      
    </div>
  );
}

export default DataFetchingComponent;
