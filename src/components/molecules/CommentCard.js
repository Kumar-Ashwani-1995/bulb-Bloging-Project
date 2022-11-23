import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';


export default function CommentCard(props) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    function getTime(d){
        var hr = d.getHours();
        var min = d.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var ampm = "am";
        if( hr > 12 ) {
            hr -= 12;
            ampm = "pm";
        }
        return  hr + ":" + min + ampm ;
        }
    return (
        <div className='mr-10 m-5 '>
            <div className='flex w-full border rounded-2xl pb-5'>
                <div>
                    <BsPersonCircle className='inline text-2xl mt-4 ml-8'></BsPersonCircle>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <span className='text-base font-semibold mt-4 ml-5'>{props.comment.username}</span>
                        <span className='text-gray-500'>
                            <span className='text-xs  mx-5'>{new Date(props.comment.date).toLocaleDateString(undefined, options)}</span>
                            <span className='text-xs  mx-5'>{getTime(new Date(props.comment.date))}</span>
                        </span>
                    </div>
                    <div className='mt-5'>
                        <p className='text-base italic ml-5 '>"{props.comment.body}"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
