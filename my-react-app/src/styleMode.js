import { defaultTheme } from 'evergreen-ui'




const themeLight = {
    ...defaultTheme,
    root:{
      paddingRight:'20px',
      paddingLeft:'20px',
      backgroundColor:'#C22810'
  
    },
    nav:{
      background:"#FAE3CD"
    },
    Logo: {
      color: 'white',
      backgroundColor: '#00783E',
      borderRadius: '5px',
    },
    imagDesc: {
      display:'flex',
      justifyContent: 'space-evenly',
      paddingTop: '33px',
      backgroundColor:'#FDF8F3',
      height: '520px'
    },
    image:{
      maxHeight:'350px',
      borderRadius: '175px'
    },
    icon:{
      height:"50px",
      paddingRight:'10px', 
      transform:'scale(1, 1)',
      
    },
    iconMenu:{
      height:"60px",
      paddingRight:'10px',
      cursor:'pointer'
  
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
    },
    title:{
      height: '105px',    
      paddingTop: '39px',
      backgroundColor:'#FDF8F3',  
    },
    card:{
      width:'310px',
      height:'131px',
      margin:'24px',
      display:"flex",
      padding:'4px',
      marginRight:'0px',
      marginLeft:'0px',
      alignItems:"center",
      flexDirection:"column",
      cursor:'pointer',
    },
    allCards:{
      backgroundColor:'#FDF8F3',
      display:'flex'
    },
    menu:{
      left: '-140px',
      width: '34px',
      height: '36px',
    },
    opcion:{
      backgroundColor:'#FDF8F3',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      padding:'20px',
      width:'400px'
    },
    textOption:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
      textAlign: 'justify',
    }
    
  }
  
const themeDark = {
    ...defaultTheme,
    root:{
      paddingRight:'20px',
      paddingLeft:'20px',
      backgroundColor:'Black',  
    },
    nav:{
      background:"#76473C"
    },
    Logo: {
      color: 'white',
      backgroundColor: '#00783E',
      borderRadius: '5px',
    },
    imagDesc: {
      display:'flex',
      justifyContent: 'space-evenly',
      paddingTop: '33px',
      backgroundColor:'#1A1A1C',
      height: '520px',
      color:'white'
    },
    image:{
      maxHeight:'350px',
      borderRadius: '175px'
    },
    icon:{
      height:"50px",
      paddingRight:'10px'
  
    },
    iconMenu:{
      height:"60px",
      paddingRight:'10px',
      cursor:'pointer'
  
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
      flexDirection:"column",
      textAlign: 'justify',
      marginTop: '60px'
      
    },
    title:{
      height: '105px',    
      paddingTop: '39px',
      background:'#1A1A1C',
      color:'white',
      
  
    },
    card:{
      width:'310px',
      height:'131px',
      margin:'24px',
      display:"flex",
      padding:'0px',
      marginRight:'0px',
      marginLeft:'0px',
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
    },
    allCards:{
      backgroundColor:'#1A1A1C',
      display:'flex'
    },
    menu:{
      left: '-140px',
      width: '34px',
      height: '36px',
    },
    opcion:{
      backgroundColor:'#1A1A1C',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      padding:'20px',
      width:'400px'
    },
    textOption:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
      textAlign: 'justify',
      color:'white'
    },
    titleOp:{
      color:'white'
    }
  
       
  }

  

export {themeLight,themeDark}