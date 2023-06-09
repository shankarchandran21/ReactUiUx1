import React from 'react'
import "./blog.css"
import Artical from "../../components/article/Article"
import {blog01,blog02,blog03,blog04,blog05} from "./import"
function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
        <div className='gpt3__blog-heading'>
            <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
        </div>
        <div className='gpt3__blog-container'>
          <div className='gpt3__blog-container_groupA'>
             <Artical imageurl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
           <div className='gpt3__blog-container_groupB'>
             <Artical imageurl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
             <Artical imageurl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
             <Artical imageurl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
             <Artical imageurl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
        </div>
    </div>
  )
}

export default Blog