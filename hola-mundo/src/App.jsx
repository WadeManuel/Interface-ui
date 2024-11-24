import { useEffect,useState } from 'react'
import './App.css'
import { TwiterFollow } from './TwiterFollow'


export function App(){
    const [descativar,setActivar]=useState(false)
    const [position,setPosition]=useState({x:0,y:0})

    //Este efecto se tiene que ejecutar cada vez que cambie el valor de desactivar
    useEffect(()=>{
        console.log("effect",{descativar});

        const handleMove=(event)=>{
            const {clienteX,clienteY} = event
            console.log('handleMove',{clienteX,clienteY})
            setPosition({x:clienteX,y:clienteY})
        }
      
        if (descativar){
            window.addEventListener('pointermove',handleMove)  
        }
       //Limpieza de los eventos 
        return ()=>{
            console.log("cleaned")
            window.removeEventListener('pointermove',handleMove)
        }
    },[descativar])
    

    const text=descativar? 'Desactivar':'Activar'
    const handleClick=()=>{
        setActivar(!descativar)
    }

    return (
        /*He creado un componente reoutilizable pasandoles parametros a mi funcion*/
    <main>

    <header className='header-top'>
        <a href="" className='LogoTipo'>React Js</a>

        <div className='navlinks'>
           <a href="#proyect1">Project1</a>
           <a href="#proyect3">Proyect3</a>
           <a href="">About</a> 
           <a href="">Services</a> 
           <a href="">Contact</a>  

        </div>
    </header>
    <section className='section' id='proyect1'>
        <div>
            <h1>Primer Proyecto</h1>
        </div>
        <div className='ui'>    
            <TwiterFollow   initalIsFollowing={true} userName="arashmil" name="Aras Esmet" />
            <TwiterFollow    userName="chadengle" name="Chadengli Roman" />
            <TwiterFollow    userName="profile" name="Tomas" />
            <TwiterFollow    userName="jm_denis" name="Jhona Mark" />
            <TwiterFollow    userName="profile2" name="Aras Miguel Duran" />
        </div> 
    </section>

    <section className='section' id='proyect3'>
       
            <div style={{
                position:'absolute',
                backgroundColor:'#09f',
                borderRadius:'50%',
                pointerEvents:'none',
                opacity:0.8,
                top:-25,
                left:-25,
                width:40,
                height:40,
                transform:`translate(${position.x}px ,${position.y}px )`
            }}>

            </div>
            <h3>Proyecto 3</h3>
            <button onClick={handleClick} className='btn-personalizado'>
                {text} Seguir Puntero
            </button>
    </section>

    <footer className='footer'>
        <p>Todos los derechos reservados</p>
        <a href="">Esmanuel</a>
    </footer>

    </main>
   
   
)
    
}