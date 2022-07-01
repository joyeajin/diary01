import React from "react";
import { useState,useRef } from "react";

// 1. onRemove함수 밖으로 뺴기
// 2. isEdit State함수 만들기
// 3. isEdit을 toggle해줄 함수 만들기
// 4. 수정하기 버튼 눌렀을때 textarea나오도록 설정하기
// 5. 수정 화면 나왔을 떄 버튼을 수정취소/수정완료 로 변경하고 각 버튼 눌렀을때 생기는 함수 설정하기
// 6. textarea에 기본 content 그대로 뜨도록 설정하기
// 7. content를 수정해놨다가 취소하기 누르고 다시 수정하기 누르면 처음의 content만 뜨도록 설정하기

//App.js로 가서 onEdit함수 만들기
//DiaryItem.js 에서 handleEdit 함수 만들기
//5자 이내면 focus되도록 설정
//수정할거냐는 확인메세지 띄우기
//toggle함수로 수정창 닫기

const DiaryItem = ({
  onEdit,
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id + 1}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () =>{

    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id+1}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id,localContent);
      toggleIsEdit();
    }

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
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
