import './bannerSkeleton.css'
import React from 'react';

const BannerSkeleton = () => {
     
  return (


<div className='banner_skeleton'>
    <div className='text_skeleton'>
        <div className='like_skeleton'></div>
        <div className='play_skeleton'></div>
    </div>
    <div className='slide_skeleton'></div>
</div>

  )
}

export {BannerSkeleton}