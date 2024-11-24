import './App.css'
import { useState } from 'react'


export function TwiterFollow({userName,name,initalIsFollowing}){
    const [isFollowing,setIsFollowing]=useState(initalIsFollowing)
    const text=isFollowing ? 'Dejar de Seguir':'Seguir'
    const buttonClassName=isFollowing ? 'btn is-Fallowing':'btn '
    
    const handleClick=()=>{
        setIsFollowing(!isFollowing)
    }
    return (
    
    <article className='articulos'>
        <header className='header'>
            <img src={`/public/img/${userName}.jpg`} alt="Imagen-A" />
            <div className='content-user'>
                <strong>{name}</strong>
                <span>@{userName}</span>
            </div>     
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>)
}