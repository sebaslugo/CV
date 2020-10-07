import React from 'react';
import './App.css';
import { Pane,  Text, Heading,Button,TreeIcon,defaultTheme, SquareIcon } from 'evergreen-ui'
import perfil from './perfil.jpg'
import jsIcon from './icon/js.png'
import nodeIcon from './icon/node.png'
import seqIcon from './icon/seq.png'
import reactIcon from './icon/react.png'

const theme = {
  ...defaultTheme,
  Logo: {
    color: 'white',
    backgroundColor: '#EC4C47',
    borderRadius: '5px',
  },
  imagDesc: {
    display:'flex',
    justifyContent: 'space-evenly',
    paddingTop: '33px'

  },
  image:{
    height:'350px',
    borderRadius: '175px'
  },
  icon:{
    height:"50px",
    paddingRight:'10px'

  },
  panelImage:{
    float:"left",
    width: '264px',
    height:'350px',
    margin:'24px',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    borderRadius:'100px'
  },
  panelText:{
    width: '500px',
    display:' flex',
    flexDirection: 'column',
    textAlign: 'justify',
    marginTop: '60px'
  }
}


function App() {
  return (
    <div className="App">
      <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <TreeIcon size={40} style={theme.Logo}/>
        </Pane>
      </Pane>
      <Pane>
        <Heading size={900} margin="default" color="muted">Full-Stack JavasCript Developer</Heading>
      </Pane>
      <Pane style={theme.imagDesc} borderTop>
        <Pane elevation={5} style={theme.panelImage}>
          <img src={perfil} style={theme.image}/> 
        </Pane>
         
        <Pane style={theme.panelText} margin="default">
          <Pane borderBottom paddingBottom={10}>
            <img src={jsIcon} style={theme.icon}/>
            <img src={seqIcon} style={theme.icon}/>
            <img src={reactIcon} style={theme.icon}/>
            <img src={nodeIcon} style={theme.icon}/>
          </Pane>           
          <Text  marginTop={10} marginTop="default" color="muted">
            En la parte del Back-End, he implementado Express para el manejo de rutas en el servidor y PostgreSQL para la creación de la base de datos, junto con el uso de Sequelize. Además, debido a la experiencia y conocimientos adquiridos por la ingeniería de sonido, he diseñado dispositivos MIDI con el manejo de Arduino y procesamiento de señales de audio con Matlab, Python y Raspberry Pi.
          </Text>
        </Pane>
      </Pane>
      
      <Pane
        elevation={0}
        float="left"
        backgroundColor="white"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>About</Text>
        <Text size={300}>Flat Panes</Text>
      </Pane>
      <Pane
        elevation={0}
        float="left"
        backgroundColor="white"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Proyectos</Text>
        <Text size={300}>Flat Panes</Text>
      </Pane>
      <Pane
        elevation={0}
        float="left"
        backgroundColor="white"
        width={250}
        height={300}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Experiencia</Text>
        <Text size={300}>Flat Panes</Text>
      </Pane>
      <Pane
        elevation={0}
        float="left"
        backgroundColor="white"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Contacto</Text>
        <Text size={300}>Flat Panes</Text>
      </Pane>
    </div>
  );
}

export default App;
