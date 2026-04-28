import React from 'react'
import ParacticeData from './ParacticeData'

const Paractice = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Practice Cards
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {ParacticeData.map((item, index) => (
            <div
              key={item.Id || index}
              className="w-[300px] bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-500 mb-3">
                {item.Name}
              </h2>

              <p className="text-gray-700 mb-4">
                {item.Body}
              </p>

              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                {item.Link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Paractice