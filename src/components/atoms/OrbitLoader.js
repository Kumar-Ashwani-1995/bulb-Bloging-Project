import React from 'react'
import { OrbitSpinner } from './Loader'

export default function OrbitLoader() {
    return (
        <div className='relative'>

            <div className='flex flex-col -ml-20 justify-center items-center h-screen'>
                <OrbitSpinner></OrbitSpinner>
            </div>
        </div>
    )
}
