import React,{useEffect, useState} from 'react';
import './App.css';
import { Pane,  Text, Heading } from 'evergreen-ui'
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
import { useSpring, animated } from 'react-spring'
import {themeLight,themeDark,themerespons} from './styleMode'
import { useMediaQuery } from 'react-responsive'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


function App() {
 
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const [checked,setChecked] = useState (true)
  const [theme, setTheme] = useState(themeLight)
  const [hover,setHover] = useState(true)
  
  useEffect(() => {
    if(isTabletOrMobileDevice && hover){
      setTheme({
        ...theme,
        imagDesc:{
          display:'flex',
          flexDirection:'column',
          justifyContent: 'space-evenly',
          paddingTop: '33px',
          backgroundColor: theme.imagDesc.backgroundColor,
          alignItems: 'center'
        }
      })
      setHover(false)
    }
    if(isBigScreen && !hover){
      checked && setTheme(themeLight)
      !checked && setTheme(themeDark)
      setHover(true)
    }
  })

  const handleChecked = (check) => {
    if(!check) {setTheme(themeDark)}
    else{setTheme(themeLight)} 

    setChecked(check)
  }
  return (
      <div className='App'>
        <Pane style={theme.root} >
          <Pane display="flex" padding={16}  borderRadius={3} style = {theme.nav}>
            
            <Pane flex={1} alignItems="center" display="flex" onClick={() => handleChecked(!checked)}>
              {checked ? <img src={moonIcon} style={theme.iconMenu}/> : <img src={sunIcon} style={theme.iconMenu}/> }
            </Pane>
            <Pane marginRight={16} alignItems="center" display="flex">
              <a href={'https://github.com/sebaslugo'} target="_blank"><HoverImage src={gitIcon} hoverSrc={githover} style={theme.icon}/></a>
              <a href={'https://www.linkedin.com/in/jhoan-sebastian-lugo-ruiz-8577b01b6'} target="_blank"><HoverImage src={linkIcon} hoverSrc={linkhover} style={theme.icon}/></a>
              <a href={'https://soundcloud.com/sebaslugo'} target="_blank"><HoverImage src={soundcloudIcon} hoverSrc={cloudhover} style={theme.icon}/></a>
            </Pane>
          </Pane>          
          <Pane backgroundColor={'#FDF8F3'} style={theme.title}>
            <Heading size={900}  color="muted">Full-Stack JavasCript Developer</Heading>
          </Pane>    
          <Pane style={theme.imagDesc} borderTop>
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
              <Pane borderBottom paddingBottom={10}>
                <HoverImage src={jsIcon} hoverSrc={jsHover} style={theme.icon}/>
                <HoverImage src={seqIcon} hoverSrc={seqhover} style={theme.icon}/>
                <HoverImage src={reactIcon} hoverSrc={reacthover} style={theme.icon}/>
                <HoverImage src={nodeIcon} hoverSrc={nodehover} style={theme.icon}/>
                <HoverImage src={speaker} hoverSrc={speakerhover} style={theme.icon}/>
              </Pane>           
              <Text  marginTop={10} marginTop="default" color="muted">
                Esta "CV Web" fue diseñada con el uso de React App y algunos frameworks css como: Evergreen, Spring React, React Hover Image y posteada en Vercel. conocimientos en el diseño de base datos en Express js, Sequelize, Postgres, SQL, JWT, Nodemailer, y el diseño de hardware con arduino. 
              </Text>
              <Pane style={theme.allCards}>
                <Pane
                  style={theme.card}
                  elevation={0}  
                >
                  <Text>About</Text>
                  <Text size={300}>Flat Panes</Text>
                </Pane>
                <Pane
                  style={theme.card}
                  elevation={0}  
                >
                  <Text>Proyectos</Text>
                  <Text size={300}>Flat Panes</Text>
                </Pane>
                <Pane
                  style={theme.card}
                  elevation={0}  
                >
                  <Text>Experiencia</Text>
                  <Text size={300}>Flat Panes</Text>
                </Pane>
                <Pane
                  style={theme.card}
                  elevation={0}  
                >
                  <Text>Contacto</Text>
                  <Text size={300}>Flat Panes</Text>
                </Pane>
              </Pane>
            </Pane>
          </Pane>   
              
          
        </Pane>  
      </div>
  );
}

export default App;
