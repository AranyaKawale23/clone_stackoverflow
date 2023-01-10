import React from 'react'


const TagList = () => {

    const TagData = [
        {
            tagName: "javascript",
            tagDis: "A single-threades synchronous programming language used to develop interctive UIs."
        },
        {
            tagName: "React",
            tagDis: "A javaScript liberary used to develop single page applications which run fast without any reload"
        },
        {
            tagName: "Native",
            tagDis: "React Native is used to develop android level application by using only javascript without using java and android studio"
        },
        {
            tagName: "Node",
            tagDis: "Node js is an open source development platform for executing JavaScript code server-side, and help us to interact with SQL and noSQL databases"
        },
        {
            tagName: "Express",
            tagDis: "Express is a frameWork of Node which enhance the power of Node with writing less code."
        },
        {
            tagName: "MongoDb",
            tagDis: "A no SQL database which store our data in form of object called collections basically used with node"
        },
        {
            tagName: "HTML",
            tagDis: "Hyper Text Mark-up Language (a system used to mark text for World Wide Web pages in order to obtain colours, style, pictures, etc.)"
        },
        {
            tagName: "Css",
            tagDis: "CSS stands for cascading style sheets. In short, CSS is a design language that makes a website look more appealing than just plain or uninspiring pieces of text."
        },
        {
            tagName: "Next",
            tagDis: "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling."
        },
        {
            tagName: "Nuxt",
            tagDis: "s is a frontend framework built upon Vue. js that offers great development features such as server side rendering, automatically generated routes."
        }
    ]

    return (
        <>
            <div className='tag-list-cont'>
                {
                    TagData.map((t, index) => {
                        return <div key={index} className='tag'>
                            <h3>{t.tagName}</h3>
                            <p>{t.tagDis}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default TagList