import React, {useState, useEffect} from 'react';
import fetchData from '../Redux/Action/fetchAction';
import { useSelector,useDispatch } from 'react-redux';
import Image from '../Assets/heroImage.svg'
import { searchKey } from '../Redux/Action/actionType';
import Definition from '../Components/Definition';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {loading, data, error} = useSelector(state=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        let tempArr = JSON.parse(localStorage.getItem(searchKey));
        if(!tempArr){
            localStorage.setItem(searchKey,JSON.stringify([])); 
            return;
        }
        if(data.length === 0){
            return;
        }
        if(tempArr.length === 0){
            tempArr.push(data[0]);
            localStorage.setItem(searchKey,JSON.stringify(tempArr));
        }else{
            localStorage.setItem(searchKey,JSON.stringify([...tempArr,data[0]]));
        }
    },[data,dispatch])

    const executeSearch =()=>{
        dispatch(fetchData(searchTerm));
        setSearchTerm('');
    }
  return (
    <main>
        <div className="hero">
            <div className="left">
                <h1>Learn new words, expand your vocabulary, and master the pronunciation of words and phrases in different accents and dialects</h1>
                <div className="searchbox">
                    <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} type="text" placeholder='Enter The Word You Want to Search...'/>
                    <button onClick={executeSearch}>Search</button>
                </div>
                <div className="result">
                    <h2>Result</h2>
                    {
                        loading && 
                        <div className="center">
                            <h2>Searching...</h2>
                        </div>
                    }

                    {
                        error &&
                        <div className="center">
                            <h2>{`Sorry pal, we couldn't find definitions for the word you were looking for.`+error.response.data.resolution}</h2>
                        </div> 
                    }

                    {
                        data.length !== 0 &&
                        <div className="ans">
                            <Definition data={data}/>
                        </div>
                    }
                </div>
            </div>
            <div className="right">
                <img src={Image} alt="Hero" />
            </div>
        </div>


    </main>
  )
}

export default Home