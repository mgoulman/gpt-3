import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog01, blog02, blog03,blog04, blog05} from './imports';

const article = {
    image: blog01,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
};

const articles = [
    {
        image: blog02,
        date: "Sep 26, 2021",
        title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
        image: blog03,
        date: "Sep 26, 2021",
        title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
        image: blog04,
        date: "Sep 26, 2021",
        title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
        image: blog05,
        date: "Sep 26, 2021",
        title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
]

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container__groupA">
                    <Article image={article.image} date={article.date} title={article.title}/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    {articles.map((item, index) => (
                        <Article image={item.image} date={item.date} title={item.title} key={item.title + index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog