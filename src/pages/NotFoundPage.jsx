import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

function NotfoundPage() {
  return <>
  <section className="text-center flex flex-col justify-center items-center h-96 mb-16 mt-3">
      <FaExclamationTriangle className=" text-red-400  mb-4 mt-9 text-9xl"/>
      <h1 className="text-6xl font-bold mb-4 mt-4">404 Not Found</h1>
      <p className="text-xl mb-5 mt-2">This page does not exist</p>
      <Link
        to="/"
        class="text-white bg-customHeaderBg hover:bg-indigo-900 rounded-xl px-3 py-2 mt-4"
        >Go Back</Link>
    </section>
  </>
}

export default NotfoundPage