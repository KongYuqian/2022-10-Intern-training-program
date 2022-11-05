import React, { useState } from 'react';
import '../style/style.css';

function Commentline() {
    let user = localStorage.getItem("username");
    let cont = localStorage.getItem("content");
    const [username] = useState(user);
    const [content] = useState(cont);
    return (
        <div className="classB">
            <h3>{username}</h3>
            <p>{content}</p>
            <input type="submit" value="删除" className="botton" />
        </div>
    )
}

function InputBox() {
    const [index, setIndex] = useState(0);
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const onNameChange = (event) => {
        setUsername(event.target.value);
    }
    const onContChange = (event) => {
        setContent(event.target.value);
    }
    function funOnClick() {
        localStorage.setItem("index", index);
        localStorage.setItem("username", username);
        localStorage.setItem("content", content);
        setIndex(index + 1);
        setContent('');
        setUsername('');
    }
    return (
        <div id="input" className="classA">
            <h3>user name</h3>
            <input type="text" value={username} onChange={onNameChange} className="inputclass"></input>
            <h3>comment content</h3>
            <input type="text" value={content} onChange={onContChange} className="inputclass" />
            <input type="submit" onClick={funOnClick} className="botton" value="提交" />
        </div>
    )
}

export default function App() {
    return (
        <div className="main">
            <InputBox />
            <div className="classBarea">
                <Commentline />
                <Commentline />
            </div>

        </div>
    )
}