import React from "react";

const DiaryItem = ({ author, content, created_date, emotion, id,onRemove }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={()=>{
          if (window.confirm(`${id+1}번째 일기를 삭제하시겠습니까?`)) {
            onRemove(id);
          }
        }}
      >삭제하기</button>
    </div>
  );
};

export default DiaryItem;
