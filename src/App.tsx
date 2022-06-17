import React, { useEffect, useState } from 'react'
import smallImg from '@/assets/imgs/5kb.png'
import bigImg from '@/assets/imgs/22kb.png'
import Class from '@/components/Class'
import { Demo1, Demo2 } from '@/components'
import '@/app.css'
import '@/app.less'

function App() {
  const [ count, setCounts ] = useState(0)
  

  useEffect(() => {
    console.log(1333121)
  }, [])

  const onChange = (e: any) => {
    setCounts(e.target.value*1)
  }
  return (
    <>
      <h2>我是修改后的文本</h2>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于于10kb的图片" />
      <div className='smallImg'></div>
      <div className='bigImg'></div>
      <Class />
      <p>受控组件</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type="text" />
      <Demo1 />
    </>
  )
}
export default App