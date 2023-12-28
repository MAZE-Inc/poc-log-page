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
    <div>
      <h1>받아온 데이터</h1>
      <ul>
        {dataList.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
