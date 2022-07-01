import DiaryList from './DiaryList';
import './App.css';
import DiaryEditor from './DiaryEditor';
import { useEffect, useRef , useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) =>{
    const created_date = new Date().getTime();

    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current +=1;
    setData([newItem, ...data]);
  }

  const onDelete = (targetId)=>{
    console.log(`${targetId+1}번째 일기가 삭제되었습니다.`);
    const newDataList = data.filter((it)=>it.id !==targetId);
    setData(newDataList);
  }

  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onDelete={onDelete}/>
    </div>
  );
}


export default App;
  
