import React, { useEffect, useState } from 'react';
import Gymcards from '../Components/Gymcards';
import { toast } from 'react-toastify';


const Home = () => {
    const [data, setData] = useState([])
    const [breaktime, setBreaktime] = useState('')
    const [gymtime, setGymtime] = useState(0)


    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='flex justify-center flex-col md:flex-row bg-blue-50'>
            <div className='w-full  md:w-3/12 order-1 md:order-2 bg-white px-4'>
                <div className='flex items-center gap-4 justify-start  pt-8'>
                    <img className='rounded-full w-[50px] h-[50px]' src="https://i.ibb.co/SKh4fJg/person-gym-1.png" alt="" />
                    <div>
                        <p>Name : Zahid Hasan</p>
                        <p>Mirpur, Dhaka</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 justify-between bg-blue-50 w-full  mx-auto mt-4 py-4 rounded-sm'>
                    <p className='px-4'><span className='font-bold text-2xl'>75</span>kg <br /> Weight</p>
                    <p className='px-4'><span className='font-bold text-2xl'>6.5</span> <br /> Height</p>
                    <p className='px-4'><span className='font-bold text-2xl'>25</span>yts <br /> Age</p>
                </div>

                <div className='mt-14'>
                    <h2 className='font-bold text-2xl'>Add a Break</h2>
                    <div className='flex items-center justify-center gap-3 md:gap-1 b bg-blue-50 py-4 mt-2 rounded-md'>
                        {data.map(item => <div onClick={() => {
                            setBreaktime(item.time)
                            localStorage.setItem("breaktime", JSON.stringify(item.time))
                        }}> <p className={`rounded-full p-3 font-bold cursor-pointer ${breaktime === item.time || JSON.parse(localStorage.getItem("breaktime")) === item.time ? "bg-blue-400" : "bg-white"}`}>{item.time}s</p></div>)}
                    </div>
                </div>

                <div className='mt-14'>
                    <h2 className='font-bold text-2xl mb-4'>Exercise Details</h2>
                    <div className='rounded-md bg-blue-50 mb-5 px-6'>
                        <p className=' pt-3 flex items-center justify-between'><span className='font-bold text-xl'>Exercise time</span> <span className='font-bold text-xl'>{JSON.parse(localStorage?.getItem('gymtime')) || gymtime}s</span></p>
                        <p className=' py-4 flex items-center justify-between'><span className='font-bold text-xl'>Break time</span> <span className='font-bold'>{breaktime || JSON.parse(localStorage?.getItem('breaktime'))}s</span></p>
                    </div>
                </div>

                <button onClick={() => {
                    toast("You have successfully completed your exercise")
                }
                } className="btn btn-primary inline-block w-full mt-5">Activity Complete</button>
            </div>


            <div className='w-full md:w-9/12 order-2 md:order-1 p-4 '>
                <div className='md:block hidden mb-5'>
                    <div className="flex items-center text-primary">
                        <img className="w-[100px] h-[100px]" src="https://i.ibb.co/9GTBzgH/gym-logo-1-removebg-preview.png" alt="" />
                        <h2 className="text-2xl font-bold">FeetYourself</h2>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    {
                        data.map(item =>
                            <Gymcards item={item} setGymtime={setGymtime} gymtime={gymtime} ></Gymcards>

                        )
                    }

                </div>
            </div>
        </div >
    );
};

export default Home;