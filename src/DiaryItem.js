import React from "react";
import { useState } from "react";

// 1. onRemove함수 밖으로 뺴기
// 2. isEdit State함수 만들기
// 3. isEdit을 toggle해줄 함수 만들기
// 4. 수정하기 버튼 눌렀을때 textarea나오도록 설정하기
// 5. 수정 화면 나왔을 떄 버튼을 수정취소/수정완료 로 변경하고 각 버튼 눌렀을때 생기는 함수 설정하기
// 6. textarea에 기본 content 그대로 뜨도록 설정하기
// 7. content를 수정해놨다가 취소하기 누르고 다시 수정하기 누르면 처음의 content만 뜨도록 설정하기

const DiaryItem = ({ author, content, created_date, emotion, id,onRemove }) => {
  
  const [isEdit,setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent,setLocalContent] = useState(content);

  const handleRemove = () => {
    if (window.confirm(`${id+1}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea 
              value={localContent}
              onChange={(e)=>setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? 
      (<>
        <button onClick={handleQuitEdit}>수정취소</button>
        <button >수정완료</button>
      </>)
      :
      (<>
        <button onClick={handleRemove}>삭제하기</button>
        <button onClick={toggleIsEdit}>수정하기</button>
      </>)
      }
    </div>
  );
};

export default DiaryItem;
