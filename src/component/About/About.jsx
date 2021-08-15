import React from 'react'
import Abo from "../../assets/images/about.png"

export const About = () => {
    return (
        <div className="min-h-full flex flex-col items-center py-0 px-10 my-28 w-screen">
            <h1 className="text-4xl font-bold text-purple-700 text-center underline tracking-wide"> 
            About Akarshan-I</h1>
            <div className="flex justify-center items-center max-w-screen-lg">
            <p className="text-lg text-gray-300 leading-snug text-left max-w-screen-sm">
            Akarshan-I is about deliverying best quality
            products to customers at a fair price.<br/> Akarshan provides a platform for booking appointment for the customers who are looking for nearby beauty parlours.<br/>
            The I in Akarshan-I stands for India.
            <br/><br/>
            <p className="animate-pulse">
            Co-founder: Shivam Shukla
            </p>
            </p>
            <img className="h-80 w-80 hover:bg-purple-800 rounded-3xl" src={Abo} alt="image" />
            </div>
        </div>
    )
}
