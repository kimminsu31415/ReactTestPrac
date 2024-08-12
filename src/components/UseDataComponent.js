// 데이터를 화면에 표현하는 컴포넌트

import React, { useState } from 'react';
import FetchDataComponent from './FetchDataComponent';
import { fetchPost } from '../api/fetchData';

function UseDataComponent() {
  const [getData, setGetData] = useState(null);

  const handleDataFetch = (data) => {
    setGetData(data); // FetchDataComponent로부터 받은 데이터를 상태로 설정
  };

  //Post 요청 로직
  const handlePostRequest = () => {
    const newPost = {
      title: 'Test',
      body: 'Test Body',
      userId: 1,
    };

    fetchPost(newPost)
      .then((data) => {
        console.log('Post 요청 결과:', data);
      })
      .catch((error) => {
        console.error('Post 요청 에러:', error);
      });
  };

  return (
    <div className="bg-blue-300">
      <h1>Fetch Post</h1>
      <div className="bg-blue-200">
        <FetchDataComponent onDataFetch={handleDataFetch} />{' '}
        {/* 데이터 가져오기 컴포넌트 */}
        {/* 가져온 데이터 화면에 표시 */}
        <div className="bg-blue-200">
          <h2>Get 요청한 데이터</h2>
          {getData ? (
            <div>
              <p>Title: {getData.title}</p>
              <p>Body: {getData.body}</p>
              <p>User ID: {getData.userId}</p>
            </div>
          ) : (
            <p>데이터를 불러오는 중...</p>
          )}
        </div>
        {'  '}
        {/* Post 요청 버튼 */}
        <button className="bg-orange-700" onClick={handlePostRequest}>
          Post 요청 보내기
        </button>
      </div>
    </div>
  );
}

export default UseDataComponent;
