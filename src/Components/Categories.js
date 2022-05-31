import React, { useContext,useEffect,useState } from 'react';
import { useParams} from 'react-router-dom';
import {consultancyContext} from '../App';
import axios from 'axios';

function Categories(){
    var context = useContext(consultancyContext)    
    let {id} = useParams();
    if(context && context.data && context.data.length){
        for(let i=0;i<context.data.length;i++){
            var findMain = context.data.findIndex(c => c.name === context.data['label'])
            var findSub = context.data[findMain].subItems.findIndex(c => c.key === id)
            
            if(context.data[findMain].key === id){
                continue;
            }
            else
            {
                break;
            }
        }
        var another = context.data[findMain].subItems[findSub].label;
        var api = context.data[findMain].subItems[findSub].subItems;
    }   

    var [sub,setSub] = useState([])
    let fetchData = async() => {
        var res = await axios.get(api);
        setSub(res.data)
    }
        useEffect(()=>{
            fetchData();
        })

    return <>
            <h2 className='text-center mt-5 lead' style={{fontSize:"40px"}}>{another}</h2>
        <div className='categories mt-5 text-center'>   
            {sub.map((e,i)=>{
                return <div key={i}>
                    <div className='container'>
                        <img src={e?.img} alt={e?.name} style={{width:"250px",height:"250px"}}/>
                        <p className='mt-3 blockquote' style={{fontSize:"23px"}}>{e?.name}</p>
                        <p className="mt-3 blockquote pb-5">&#x20B9;{e?.price}</p>
                    </div>
                </div>
            })}
        </div>
    </>
}

export default Categories;