import React,{useEffect, useState} from 'react';
import './App.css';
import { Pane,  Text, Heading,Menu,toaster,IconButton,Popover,Position, MenuIcon } from 'evergreen-ui'
import HoverImage from "react-hover-image";
import perfil from './perfil.jpg'
import jsIcon from './icon/js.png'
import jsHover from './icon/jshover.png'
import nodeIcon from './icon/node.png'
import nodehover from './icon/nodehover.png'
import seqIcon from './icon/seq.png'
import seqhover from './icon/seqhover.png'
import reactIcon from './icon/react.png'
import reacthover from './icon/reacthover.png'
import gitIcon from './icon/github.png'
import githover from './icon/githover.png'
import linkIcon from './icon/linkenid.png'
import linkhover from './icon/linkhover.png'
import sunIcon from './icon/sun.png'
import moonIcon from './icon/moon.png'
import soundcloudIcon from './icon/soundcloud.png'
import cloudhover from './icon/cloudhover.png'
import speaker from './icon/speaker.png'
import speakerhover from './icon/speakerhover.png'
import proyectos from './icon/projectos.png'
import contacto from './icon/contacto.png'
import experiencia from './icon/experiencia.png'
import cv from './icon/cv.png'
import about from './icon/about.png'
import { useSpring, animated } from 'react-spring'
import {themeLight,themeDark} from './styleMode'
import { useMediaQuery } from 'react-responsive'
import Opcion from './Opcion'
import hojadeVida from './cv.pdf'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const options = ['About','Proyectos','Experiencia','Contacto']

function App() {
 
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const [checked,setChecked] = useState (true)
  const [themePrev, setThemePrev] = useState(themeLight)
  const [theme, setTheme] = useState(themeLight)
  
  const [hover,setHover] = useState(true)
  
  useEffect(() => {
    
    if(isTabletOrMobileDevice && hover){
      let tema ={
        ...themePrev,
        imagDesc:{
          display:'flex',
          flexDirection:'column',
          justifyContent: 'space-evenly',
          backgroundColor: themePrev.imagDesc.backgroundColor,
          alignItems: 'center'
        },
        image:{
          maxHeight:'218px',
          borderRadius: '175px'
        },
        panelImage:{
          float:"left",
          width: '264px',
          height:'330px',
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          borderRadius:'100px'
        },     
        panelText:{
          width:'323px',          
          paddingRight: '29px',
          paddingBottom: '20px',
          marginLeft: '10px',
          textAlign: 'justify',
        },
        icon:{
          height:"40px",
          paddingRight:'10px'
      
        },
        opcion:{
          backgroundColor:themePrev.opcion.backgroundColor,
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          padding:'20px',
          width:'300px'
        },
        iconMenu:{
          height:"40px",
          paddingRight:'10px',
          cursor:'pointer'
      
        },
        
      }
      setTheme(tema)
      setHover(false)
    }
    if(isBigScreen && !hover ){
      checked && setTheme(themeLight)
      !checked && setTheme(themeDark)
      setHover(true)
    }
  })

  const handleChecked = (check) => {
    if(!check && isTabletOrMobileDevice) {setThemePrev(themeDark)}    
    else if(check && isTabletOrMobileDevice){setThemePrev(themeLight)}
    else if(!check && !isTabletOrMobileDevice){
      setTheme(themeDark)
    }
    else{setTheme(themeLight)}
    setHover(true)
    setChecked(check)
  }
  return (
      <div className='App'>
        <Pane style={theme.root} >
          <Pane display="flex" padding={16}  borderRadius={3} style = {theme.nav}>
            
            <Pane flex={1} alignItems="center" display="flex" >
              {checked ? <img src={moonIcon} style={theme.iconMenu} onClick={() => handleChecked(!checked)}/> : <img src={sunIcon} style={theme.iconMenu} onClick={() => handleChecked(!checked)}/> }
              <a href={hojadeVida} download="CV-Jhoan-Lugo" target="_blank">
                <img src={cv} style={theme.icon}/>          
              </a>
            </Pane>
            
            <Pane marginRight={16} alignItems="center" display="flex">
              <a href={'https://github.com/sebaslugo'} target="_blank"><HoverImage src={gitIcon} hoverSrc={githover} style={theme.iconMenu}/></a>
              <a href={'https://www.linkedin.com/in/jhoan-sebastian-lugo-ruiz-8577b01b6'} target="_blank"><HoverImage src={linkIcon} hoverSrc={linkhover} style={theme.iconMenu}/></a>
              <a href={'https://soundcloud.com/sebaslugo'} target="_blank"><HoverImage src={soundcloudIcon} hoverSrc={cloudhover} style={theme.iconMenu}/></a>
            </Pane>
          </Pane>          
          <Pane backgroundColor={'#FDF8F3'} style={theme.title}>
            <Heading size = {!isTabletOrMobileDevice ? 900 : 600} color="muted">Full-Stack JavasCript Developer</Heading>
          </Pane>  
          <Pane style={theme.imagDesc} borderTop>
            {isTabletOrMobileDevice &&
              <Popover   
                position={Position.BOTTOM_LEFT}        
                content={
                  <Menu>
                    <Menu.Group>                  
                      {options.map((opcion)=>(
                        <Popover
                        content={({ close }) => (
                          <Opcion close={close} theme={theme} value={opcion}/>
                        )}
                        position={Position.BOTTOM}
                        >
                          <Menu.Item>{opcion}</Menu.Item>
                        </Popover>                        
                      ))}  
                      <Menu.Item ></Menu.Item>               
                    </Menu.Group>
                  </Menu>
                }
              >
                <IconButton appearance="minimal" icon={MenuIcon} iconSize={18} style={theme.menu}/>
              </Popover>
            
            } 
            <Pane elevation={5} style={theme.panelImage}>
            <animated.div
              class="card"
              onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            >
              <img src={perfil} style={theme.image}/> 
            </animated.div>
            </Pane>
            
            <Pane style={theme.panelText} margin="default">
              <Pane borderBottom paddingBottom={10} >
                <HoverImage src={jsIcon} hoverSrc={jsHover} style={theme.icon}/>
                <HoverImage src={seqIcon} hoverSrc={seqhover} style={theme.icon}/>
                <HoverImage src={reactIcon} hoverSrc={reacthover} style={theme.icon}/>
                <HoverImage src={nodeIcon} hoverSrc={nodehover} style={theme.icon}/>
                <HoverImage src={speaker} hoverSrc={speakerhover} style={theme.icon}/>
              </Pane>           
              <Text  marginTop={10} marginTop="default" color="muted">
                Esta "CV Web" fue diseñada con el uso de React App y algunos frameworks css como: Evergreen, Spring React, React Hover Image y posteada en Vercel. conocimientos en el diseño de base datos en Express js, Sequelize, Postgres, SQL, JWT, Nodemailer, y el diseño de hardware con arduino. 
              </Text>
              {!isTabletOrMobileDevice && <Pane style={theme.allCards}>
              <Popover
                content={({ close }) => (
                  <Opcion close={close} theme={theme} value={'About'}/>
                )}
                position={Position.RIGHT}
              >
                <Pane
                  hoverElevation={3}
                  borderTop='default'
                  borderLeft='default'
                  borderRight='default'
                  style={theme.card}                   
                >                  
                  <Text size={200}>About</Text>
                  <img src={about}/>
                </Pane>
              </Popover>
              <Popover
                content={({ close }) => (
                  <Opcion close={close} theme={theme} value={'Proyectos'}/>
                )}
                position={Position.RIGHT}
              >
                <Pane
                  hoverElevation={3}
                  borderTop='default'
                  borderLeft='default'
                  borderRight='default'
                  style={theme.card}                   
                >
                  <Text size={200}>Proyectos</Text>
                  <img src={proyectos} style={{padding:'10px'}}/>
                </Pane>
              </Popover>
              <Popover
                content={({ close }) => (
                  <Opcion close={ close} theme={theme} value={'Experiencia'}/>
                )}
                position={Position.LEFT}
              >
                <Pane
                  hoverElevation={3}
                  borderTop='default'
                  borderLeft='default'
                  borderRight='default'
                  style={theme.card}                    
                >
                  <Text size={200}>Experiencia</Text>
                  <img src={experiencia}/>
                </Pane>
              </Popover>
              <Popover
                
                content={({ close }) => (
                  <Opcion close={ close} theme={theme} value={'Contacto'}/>
                )}
                position={Position.LEFT}
              >
                <Pane
                  hoverElevation={3}
                  borderTop='default'
                  borderLeft='default'
                  borderRight='default'
                  style={theme.card}                    
                >
                  <Text size={200}>Contacto</Text>
                  <img src={contacto} style={{padding:'10px'}}/>
                </Pane>
              </Popover>
              </Pane>}
            </Pane>
          </Pane>   
              
          
        </Pane>  
      </div>
  );
}

export default App;
