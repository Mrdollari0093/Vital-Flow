import React from 'react'
import { Title } from './FeatureData'
import FeatureData from './FeatureData'

function Feature (){
  return (
    <div className='bg-gray-200 min-h-screen'>

        <div className="Feature text-center p-10 font-bold text-3xl"><h1 className=''>{Title}</h1></div>   


<div className='max-w-6xl mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:m-auto '  >
        {
            FeatureData.map((Data  =>(
                <div >
                    <div className="Card p-4 bg-white rounded-lg m-4 md:m-5 lg:m-4">
                        <div className="CardTitle">
                            <h2 className='font-bold'>{Data.Name}</h2>
                        </div>
                        <div className="CardBody">
                            <p className='text-black-400'>{Data.Body}</p>
                        </div>
                    </div>
                </div>

            )))
        }
       </div>    
    </div>
  )
}

export default Feature
