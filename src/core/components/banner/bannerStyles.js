import { useEffect, useState } from "react"

export const useBannerStyles = () =>{
    const [width, setWidth] = useState(window.innerWidth)
    const detectWidth = () =>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize", detectWidth)
        console.log(width)
        return() =>{
            window.removeEventListener("resize", detectWidth)
        }
    },[width])

    let stylesSwiper;
    let stylesSlide;
    let stylesTitle;
    let stylesInfoContainer;
    let stylesImg;
    if(width>761){
        stylesSwiper={overflow:'hidden', marginTop:0, minHeight: 400}
        stylesSlide={width: '100%', height:'100%', backgroundColor: '#121212', display:'grid', gridTemplateColumns:'30% 1fr', justifyContent: 'flex-end', overflow:'hidden'}
        stylesImg={objectFit:'cover', width:'100%', height:'100%'}
        stylesInfoContainer={color: '#ddd', width:'100%', textAlign: 'left',display:'flex',flexDirection: 'column',justifyContent:'space-around',padding:'0 8px'}
        stylesTitle={fontSize:'35px', height:'70%', whiteSpace:'pre-wrap'}
    }else if(width<760){
        stylesSwiper={overflow:'hidden', height: 200}
        stylesSlide={width: '100%', height:'100%', backgroundColor: '#121212', display:'grid', gridTemplateColumns:'30% 1fr', overflow:'hidden'}
        stylesImg={objectFit:'cover', width:'100%', height:'100%'}
        stylesInfoContainer={color: '#ddd', width:'100%', textAlign:'center',display:'flex',flexDirection: 'column',justifyContent:'center', alignItems:'center'}
        stylesTitle={fontSize:'1rem', height:'56%', width:'170%', whiteSpace:'pre-wrap', display: 'flex', justifyContent:'center', alignItems:'center' , lineClamp: 3, overflow:'hidden', transform:'rotate(-90deg)'}
    }
    return {
        stylesSlide, stylesTitle, stylesSwiper, stylesInfoContainer, stylesImg
    }
}