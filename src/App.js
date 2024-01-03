import React from 'react';
import manwol from './manwol.png';

function DataFetchingComponent() {
  // const [dataList, setDataList] = useState([]);

  // 데이터를 가져오는 함수
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://9a8c-183-99-2-118.ngrok-free.app/data', {
  //       headers: {
  //         'ngrok-skip-browser-warning': 'true'
  //       }}); // 서버 URL을 입력하세요.
  //     const data = await response.json();
  //     setDataList(prevDataList => [...prevDataList, data]);
  //   } catch (error) {
  //     console.error('데이터를 불러오는데 실패했습니다:', error);
  //   }
  // };

  // // 마운트될 때와 5초마다 fetchData 함수를 호출
  // useEffect(() => {
  //   fetchData();
  //   const interval = setInterval(fetchData, 5000);
  //   return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
  // }, []);

  // 화면에 데이터 리스트를 나열
  return (

    <div style={{width:'100%'}}>
      <div style={{textAlign:'center'}}>
        <h1>2024년 1월 3일 매장 내 실시간 현황</h1>
        <h2>만월회</h2>
      </div>
      <div style={{display: 'flex'}}>
        <div style={{textAlign: 'center', width: '50%'}}>
          <img src={manwol} alt="만월회 도면" style={{width: "100%"}}/>
        </div>
        <div>
          <div> 
            <p><strong>✅ [2024년 1월 3일 오후 5시 35분 17초] 기준 매장 내 고객 현황</strong></p>
            <ul> 
              <li>매장 내 고객 수 : 총 3명 (남 1 / 여 2) </li>
              <li> 3번 고객 (남)
                <ul>
                  <li>냉장고 구역에 위치</li>
                  <li>방문한지 15분 24초 지남</li>
                </ul>
              </li>
              <li> 5번 고객 (여)
                <ul>
                  <li>로비에 위치</li>
                  <li>방문한지 3분 12초 지남</li>
                </ul>
              </li>
              <li> 6번 고객 (여)
                <ul>
                  <li>로비에 위치</li>
                  <li>방문한지 3분 15초 지남</li>
                </ul>
              </li>
            </ul>
          </div>

        <div>
          <p><strong>🚨 [2024년 1월 3일 오후 5시 35분 20초] 이벤트 발생</strong></p>
          <ul>
            <li>3번 고객이 매장을 나감</li> 
          </ul>
        </div>

        <div>
          <p><strong>✅ [2024년 1월 3일 오후 5시 35분 22초] 기준 매장 내 고객 현황</strong></p>
          <ul> 
            <li>매장 내 고객 수 : 총 2명 (남 0 / 여 2) </li>
            <li> 5번 고객 (여)
              <ul>
                <li>로비에 위치</li>
                <li>방문한지 3분 17초 지남</li>
              </ul>
            </li>
            <li> 6번 고객 (여)
              <ul>
                <li>로비에 위치</li>
                <li>방문한지 3분 20초 지남</li>
              </ul>
            </li>
          </ul>
        </div>

        </div>
      </div>
    </div>

    // <div style={{padding: 20}}>
    //   <h1>2024년 1월 3일 매장 내 실시간 현황</h1>
    //   <h2>만월회</h2>
    //   {dataList.map((item, index) => (
    //     <div key={index} style={{ marginBottom: '20px', padding: '10px' }}>
    //       <p><strong>시각:</strong> {item.timestamp}</p>
    //       <p><strong>현재 매장 내 고객 목록:</strong> 'g_1', 'g_2', 'g_3', 'g_4'</p>
    //       <p><strong>이벤트 발생 목록</strong></p>
    //       {console.log(item.data.f)}
    //       <ul>
    //         <li>{item.type === 1 ? 
    //                   `${item.data.user_id}가 ${item.data.zone_id}에 관심을 보이고 있습니다.`:
    //                   `${item.data.user_id}가 ${item.data.from_zone_id}에서 ${item.data.to_zone_id}로 이동했습니다.`}
    //                   </li>
    //                   </ul>
    //       </div>
    //       ))}
      
    // </div>
  );
}

export default DataFetchingComponent;
