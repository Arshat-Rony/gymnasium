import React from 'react';

const data = [
    { id: 1, name: "how does react work?", ans: "" },
    { id: 2, name: 'difference between props and state?', ans: "" },
    { id: 3, name: 'what is the purpose of useEffect without loading data? ', ans: "" }
]


const Questions = () => {
    return (
        <div className='w-8/12 mx-auto mt-20'>
            <h2 className='text-center font-bold text-primary text-2xl'>All your qeury</h2>
            {
                data.map(question =>
                    <div className='mt-8'>
                        <hr />
                        <p className='mt-5 font-bold text-xl'>Question : {question.name}</p>
                        <p>Anwer : {question.ans}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Questions;