import React from 'react'
import smallImg from '@/assets/imgs/5kb.png'
import bigImg from '@/assets/imgs/22kb.png'
import '@/app.css'
import '@/app.less'

function App() {
  return (
    <>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于于10kb的图片" />
      <div className='smallImg'></div>
      <div className='bigImg'></div>
    </>
  )
}
export default App