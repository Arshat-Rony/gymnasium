import React, { useState } from 'react';

const Gymcards = ({ item, setGymtime, gymtime }) => {
    const { name, _id, time, age, picture } = item;
    const [add, setAdd] = useState(false)

    return (
        <div className=''>
            <div key={_id} className="card w-96 md:w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="GymImages" className="rounded-xl h-[200px] w-[300px]" />
                </figure>
                <div className="card-body items-start text-start">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vitae, voluptatum expedita quaerat, qui, et vero obcaecati consequuntur rerum ipsa ea minus repellendus asperiores molestiae autem laboriosam nobis perspiciatis officia.</p>
                    <p>For Age {age}</p>
                    <p>Time Required : {time}s</p>

                    <button onClick={() => {
                        setGymtime(parseInt(time) + gymtime)
                        localStorage.setItem("gymtime", JSON.stringify(gymtime + parseInt(time)))
                        setAdd(true)
                    }
                    } className={`btn  w-full inline-block ${add ? "btn-success" : "btn-primary"}`}>{add ? "Added " : "Add to List"}</button>

                </div>
            </div>

        </div>
    );
};

export default Gymcards;