import React from 'react'
import { GoArrowRight } from "react-icons/go";
import Example from './Carosuel';

export default function About() {
  return (
    <div className=' flex'><div><GoArrowRight  className='text-white'/>
      <h1 className=' font-led text-xl text-slate-500 '>About this Project</h1>
      <h1 className='font-Aeo  text-white uppercase p-2'>The Story behind <br/> Rail madad
    </h1></div>
    <Example/>
    </div>
  )
}
