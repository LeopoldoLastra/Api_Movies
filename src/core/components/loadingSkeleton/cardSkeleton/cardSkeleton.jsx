import './cardSkeleton.css'
import React from 'react';


const CardSkeleton = ()=>{

    return(
        <>


        
            <div className='skeleton_container'>
                <div className='skeleton_cards'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>

            <div className='skeleton_container'>
                <div className='skeleton_cards even_skeleton'> </div>
                <div className="card_skeleton_info"></div>
            </div>
                
            <div className='skeleton_container'>
                <div className='skeleton_cards third_skeleton'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>
                
            <div className='skeleton_container desktop_skeleton_container'>
                <div className='skeleton_cards'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>

            <div className='skeleton_container desktop_skeleton_container'>
                <div className='skeleton_cards even_skeleton'> </div>
                <div className="card_skeleton_info"></div>
            </div>
                
            <div className='skeleton_container desktop_skeleton_container'>
                <div className='skeleton_cards third_skeleton'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>
     
                
                        
               
          
        </>
    )
}

export {CardSkeleton}