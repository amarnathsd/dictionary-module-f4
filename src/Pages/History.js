import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { searchKey } from '../Redux/Action/actionType';
import { clearData } from '../Redux/Action/fetchAction';
import Definition from '../Components/Definition';

const History = () => {
    const [totalHistory,setTotalHistory] = useState([]);
    const [currHistory,setCurrHistory] = useState(null);
    const dispatch = useDispatch();
    dispatch(clearData());
    useEffect(()=>{
        const tempArr = JSON.parse(localStorage.getItem(searchKey));
        if(tempArr.length > 0){
            setTotalHistory(tempArr);
        }
        console.log(tempArr);
    },[dispatch]);
    console.log(totalHistory);
  return (
    
    <section>
        {
        !currHistory &&
        totalHistory &&
        <>
        <h2>Your Searches Till Now</h2>
        <ol>
        {totalHistory.map(items=>{
            return <li onClick={()=>setCurrHistory(items)} key={items.sourceUrls[0]}>{items.word}</li>
        })}
        </ol>
        </>
        }

        {
            currHistory && 
            <Definition data={[currHistory]}/>
        }
    </section>

  )
}

export default History;