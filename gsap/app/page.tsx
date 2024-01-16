import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <h1>Cleve Momanyi</h1>
        <p>Software Engineer</p>
      </div>
      <div id="sections flex overflow-scroll">
      <div className='min-h-screen min-w-full bg-gray-600 flex justify-center items-center' >
        <h1>Section 1</h1>
      </div>
      <div className='min-h-screen min-w-full bg-red-600 flex justify-center items-center' >
        <h1>Section 1</h1>
      </div>
      <div className='min-h-screen min-w-full bg-yellow-600 flex justify-center items-center' >
        <h1>Section 1</h1>
      </div>
      <div className='min-h-screen min-w-full bg-green-600 flex justify-center items-center' >
        <h1>Section 1</h1>
      </div>
      </div>
    </main>
  )
}
