import React from 'react';
import { Pane,  IconButton,SmallCrossIcon,Heading,Text } from 'evergreen-ui'


export default function Option ({close,theme,value}) {
    return (
        <Pane
        height='auto'
        display='flex'
        style={theme.opcion}
        >
        <IconButton 
        marginLeft='90%' 
        icon={SmallCrossIcon} 
        appearance="minimal" 
        onClick={close}
        >
        </IconButton>
        <Pane marginBottom={20} style={theme.titleOp}>
            <Heading size = {700}  color="muted">{value}</Heading>
        </Pane> 
        {value === 'About' && 
            <Pane style={theme.textOption} borderTop='default'>
                <Heading size = {400} marginTop={10} color="muted">Formación Academica </Heading>
                <Heading size = {300} marginTop={10} color="muted">Henry</Heading>
                <Text  marginTop={10} marginTop="default" color="muted">
                    Full-Stack Developer  | JavaScript | NodeJs | React | Express | Sequelize | Postgress | SQL
                    | 2020 - Cursando      
                </Text>
                <Heading size = {300} marginTop={10} color="muted">Universidad San Buenaventura - sede Bogotá</Heading>
                <Text  marginTop={10} marginTop="default" color="muted">
                    Ingeniería de Sonido | Acústica | Diseño sonoro | Pre-Post producción de audio | analisis de señales | sonido en vivo | Arduino | Matlab | Python
                    | 2012 - 2018 
                </Text>
            </Pane>
        }

        {value === 'Proyectos' && 
            <Pane style={theme.textOption} borderTop='default'>
                <Heading size = {300} marginTop={10} color="muted">Henry App</Heading>
                <Text  marginTop={10} marginTop="default" color="muted">
                    React | React-Router | Redux | Material-ui | MaterialTable | Express | Nodemailer | Postgress | Sequelize | JWT | Grupo: 9 Personas         
                </Text>
                <Heading size = {300} marginTop={10} color="muted">CV</Heading>
                <Text  marginTop={10} marginTop="default" color="muted">
                    React | Evergreen-ui | React-Spring | React-hoover-image | React - responsive            
                </Text>
                <Heading size = {300}  marginTop={10} color="muted">Ecommerce</Heading>
                <Text  marginTop={10} marginTop="default" color="muted">
                    React | React-Router | Redux | Material-ui | MaterialTable | Semantic-ui | Express | Nodemailer | Postgress | Sequelize | JWT | Grupo: 6 Personas         
                </Text>
            </Pane>
        }

        {value === 'Experiencia' && 
            <Pane style={theme.textOption} borderTop='default'>
                <Heading size = {300} marginTop={10} color="muted">Templo DJ SAS</Heading>
                <Text  marginTop={10} marginTop="default" color="muted">
                    1 año de experiencia | Docente |  Elaboración de programas de estudio | Diseño de material de apoyo | Manejo de 6 a 15 estudiantes por clase | Impartía clases online.      
                </Text>
                <Heading size = {300} marginTop={10} color="muted">SF SERRANO</Heading>
                <Text  marginTop={10} marginTop="default" color="muted">
                    6 meses de experiencia | pasantia | Mediciones de ruido | Elaboración de informes tecnicos | Diseño acústico | Manejo de software de audio            
                </Text>
                <Heading size = {300}  marginTop={10} color="muted">JULIÁN PEÑA PRODUCCIÓN DE EVENTOS S.A.S</Heading>
                <Text  marginTop={10} marginTop="default" color="muted">
                    8 meses de experiencia | Manipulación de equipo analogo y digital | montaje e ubicación de sistemas de audio e iluminación |  control del refuerzo sonoro del club Baum       
                </Text>
            </Pane>
        }

        {value === 'Contacto' && 
            <Pane style={theme.textOption} borderTop='default'>
                <Heading size = {300} marginTop={10} color="muted">Email</Heading>
                <Text  marginTop={10} marginTop="default" color="muted">
                    jslugo235@gmail.com     
                </Text>
            
            </Pane>
        }

        
        
        
        </Pane>
    )
}

