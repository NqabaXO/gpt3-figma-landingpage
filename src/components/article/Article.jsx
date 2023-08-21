import React from 'react'
import './Article.css'

function Article({ imgUrl, title, date}) {
  return (
    <div className='gpt3__blog-container__article'>
        <div className='gpt3__blog-container__article-image'>
          <img src={imgUrl} alt=''/>
        </div>
        <div className='gpt3__blog-container__article-content'>
          
          <p>{date}</p>
            <h3>{title}</h3>
           <p>Read Full Article</p>
          

        </div>
    </div>
  )
}

export default Article