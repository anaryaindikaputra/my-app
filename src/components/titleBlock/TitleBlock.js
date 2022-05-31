import React, { useState } from "react";

const TitleBlock = () => {
    const [title, setTitle] = useState("Hello World !!");

    return (
        <div className="hello-world">
            <h1 className="hello-world title">{title}</h1>
            
            <label htmlFor="title-input">Title Above: </label>
            <input id="title-input" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
    )
}

export default TitleBlock;