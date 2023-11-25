import './listSkeleton.css'


const ListSkeleton = ()=>{

    return(
        <>

            <div className='list_skeleton_container'>
                <div className='skeleton_cards'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>

            <div className='list_skeleton_container'>
                <div className='skeleton_cards even_skeleton'> </div>
                <div className="card_skeleton_info"></div>
            </div>
                
            <div className='list_skeleton_container'>
                <div className='skeleton_cards third_skeleton'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>
                
            <div className='list_skeleton_container desktop_list_skeleton_container'>
                <div className='skeleton_cards'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>

            <div className='list_skeleton_container desktop_list_skeleton_container'>
                <div className='skeleton_cards even_skeleton'> </div>
                <div className="card_skeleton_info"></div>
            </div>
                
            <div className='list_skeleton_container desktop_list_skeleton_container'>
                <div className='skeleton_cards third_skeleton'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>
            <div className='list_skeleton_container desktop_list_skeleton_container' >
                <div className='skeleton_cards'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>

            <div className='list_skeleton_container desktop_list_skeleton_container'>
                <div className='skeleton_cards even_skeleton'> </div>
                <div className="card_skeleton_info"></div>
            </div>
                
            <div className='list_skeleton_container desktop_list_skeleton_container'>
                <div className='skeleton_cards third_skeleton'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>
                
            <div className='list_skeleton_container desktop_list_skeleton_container'>
                <div className='skeleton_cards'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>

            <div className='list_skeleton_container desktop_list_skeleton_container'>
                <div className='skeleton_cards even_skeleton'> </div>
                <div className="card_skeleton_info"></div>
            </div>
                
            <div className='list_skeleton_container desktop_list_skeleton_container'>
                <div className='skeleton_cards third_skeleton'> </div>
                <div className="card_skeleton_info odd_skeleton"></div>
            </div>

       
                
            

        </>
    )
}

export {ListSkeleton}