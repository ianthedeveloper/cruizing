import React from 'react';

const Joke = (props) => {
    const {id, question, answer} = props;

    return(
        <div className='tc'>
            <h3><span style={{fontWeight: "bold", fontSize: "14px" }}>{id}::</span>{question}</h3>
            <h5>{answer}</h5>
        </div>
    )
}

export default Joke;