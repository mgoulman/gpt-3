import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components'

const WhatGPT3 = () => {

    const title_1 = "What is GPT-3";
    const title_2 = "Chatbots";
    const title_3 = "Knowledgebase";
    const title_4 = "Education";
    const text_1 = "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."; 
    const text_2 = "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ";
    const text_3 = "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b";
    const text_4 = "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b";
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title={title_1} text={text_1}/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title={title_2} text={text_2}/>
                <Feature title={title_3} text={text_3}/>
                <Feature title={title_4} text={text_4}/>
            </div>
        </div>
    )
}

export default WhatGPT3