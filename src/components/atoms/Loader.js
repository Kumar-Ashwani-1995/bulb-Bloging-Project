import React from 'react'
import '../CSS/loader.css'
import BulbLogo from './BulbLogo'

export function PostLoader() {
    return (
        <div>
            <div className="loader-main-item">
                <div className="loader-css-dom"></div>
            </div>
        </div>
    )
}

export function OrbitSpinner() {
    return (
        <div className="spinner-box">
            <div className="solar-system">
                <div className="earth-orbit orbit">
                    <div className="planet earth"></div>
                    <div className="venus-orbit orbit">
                        <div className="planet venus"></div>
                        <div className="mercury-orbit orbit">
                            <div className="planet mercury"></div>
                            <div className="text-5xl sun " >
                            <BulbLogo ></BulbLogo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export function DotLoader() {
    return (
    <div className="spinner-box">
        <div className="pulse-container">
            <div className="pulse-bubble pulse-bubble-1"></div>
            <div className="pulse-bubble pulse-bubble-2"></div>
            <div className="pulse-bubble pulse-bubble-3"></div>
        </div>
    </div>)
}

