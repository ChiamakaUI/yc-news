import React, { useState, useEffect } from 'react';
import { getComments }from "./Api";

const Comments = (props)=>{

    const [ comments, setComments ] = useState([]);

    useEffect(()=>{
        async function fetch() {
            let comments = await getComments({ id: props.match.params.id });
            console.log(comments);
        }

        fetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default Comments;
