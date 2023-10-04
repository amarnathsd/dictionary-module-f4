import React from 'react';

const Definition = ({data}) => {
  return (
    <div className='scroll'>
        <h2>{data[0].word}</h2>
        <p>{data[0].phonetic}</p>
        {data[0].phonetics && data[0].phonetics.map((item,index)=>{
            return item.audio !== '' &&
            <div>
            <audio controls key={index} src={item.audio}/>
            <p key={item.text}>{item.text}</p>
            </div>
        })}
        {
            data[0].meanings[0] && 
            <div>
            <strong style={{textDecoration:'underline', marginBottom:'10px'}}>{data[0].meanings[0].partOfSpeech}</strong>
            {data[0].meanings[0].definitions && data[0].meanings[0].definitions.map((item,idx)=>{
                return <p key={idx}>{item.definition}</p>
            })}
            </div>
        }
        {
            data[0].meanings[1] && 
            <div>
            <strong style={{textDecoration:'underline', marginBottom:'10px'}}>{data[0].meanings[1].partOfSpeech}</strong>
            {data[0].meanings[1].definitions && data[0].meanings[1].definitions.map((item,idx)=>{
                return <p key={idx}>{item.definition}</p>
            })}
            </div>
        }
    </div>
  )
}

export default Definition