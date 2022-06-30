import DiaryList from './DiaryList';
import './App.css';
import DiaryEditor from './DiaryEditor';

const dummyList = [
  {
    id : 1,
    author : '조예진',
    content : '하이1',
    emotion : 1,
    created_date : new Date().getTime(),
  },
  {
    id : 2,
    author : '양기웅',
    content : '하이2',
    emotion : 3,
    created_date : new Date().getTime(),
  },
  {
    id : 3,
    author : '쪼롱이안녕',
    content : '하이3',
    emotion : 2,
    created_date : new Date().getTime(),
  }
]

function App() {
  
  return (
    <div className='App'>
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}


export default App;
  