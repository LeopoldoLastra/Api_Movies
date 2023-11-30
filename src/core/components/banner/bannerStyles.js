import { useEffect, useState } from "react"

export const useBannerStyles = () =>{
    const [width, setWidth] = useState(window.innerWidth)
    const detectWidth = () =>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize", detectWidth)
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
        stylesSwiper={overflow:'hidden', margin:'0 auto', minHeight: 400, borderRadius:'16px', marginTop:'80px'}
        stylesSlide={width: '100%', height:'100%', backgroundColor: '#000', display:'grid', gridTemplateColumns:'30% 1fr', justifyContent: 'flex-end', overflow:'hidden'}
        stylesImg={objectFit:'cover', width:'100%', height:'100%', borderRadius: '0'}
        stylesInfoContainer={color: '#ddd', width:'100%', textAlign: 'center',display:'flex',flexDirection: 'column',justifyContent:'center',padding:'0 8px'}
        stylesTitle={fontSize:'30px', height:'70%', whiteSpace:'pre-wrap'}
    }else if(width<760){
        stylesSwiper={overflow:'hidden', minHeight: 200, marginTop:'65px', padding:'5px', justifyItems:'center', alignItems:'center'}
        
        stylesSlide={width: '100%', placeSelf:'center', minHeight:'100%', maxHeight: '100%',backgroundColor: '#121212', display:'grid', gridTemplateColumns:'30% 1fr', overflow:'hidden', alignContent:'center'}
        
        stylesImg={objectFit:'cover', width:'100%', minHeight: '100%', height:200, objectPosition:'50% 50%'}
        stylesInfoContainer={color: '#ddd', width:'100%', border:'1px olid yellow', textAlign:'center',display:'flex',flexDirection: 'column',justifyContent:'center', alignItems:'center'}
        
        stylesTitle={fontSize:'1rem', width:200, maxHeight:'100%', padding: '10px', whiteSpace:'pre-wrap', display: 'flex', justifyContent:'center', alignItems:'center' , lineClamp: 3, overflow:'hidden', transform:'rotate(-90deg)'}
    }
    return {
        stylesSlide, stylesTitle, stylesSwiper, stylesInfoContainer, stylesImg
    }
}