import Image from 'next/image'
import React from 'react'

const MyName = () => {
  return (
    <div id='Div_MyName'>
            <div id="My_nameL">
                <h1>Hello, my name is :</h1>
                <h4>Mustafa Mohammed Alarify</h4>
                <h1>Iam a programmer</h1>
                <button id='btn_My_name'>More Info</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati consectetur accusamus aut alias et voluptatem dicta? Velit cupiditate atque temporibus tenetur numquam voluptas, debitis facere, quisquam odio officiis cumque?</p>
            </div>
            <div id="My_nameR">
              <Image
              src='/m.png'
              width={500}
              height={500}
              alt='lll'
              />
            </div>
    </div>
  )
}

export default MyName
