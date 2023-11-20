import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Menu({ active, setActive, children }) {
    const [isVisible, setIsVisible] = useState(false)
    
    const closeDrawer = () => {
        setIsVisible(false)
        setTimeout(() => {
        setActive(false)
        }, 300)
    }

    useEffect(() => {
        if (active) {
        setIsVisible(true)
        }
    }, [active])

    if (!active) return null

    return (
        <>
            {
                createPortal(
                    <div
                        role="dialog"
                        aria-modal="true"
                        style={{
                            opacity: `${isVisible ? '1' : '0'}`,
                            visibility: `${isVisible ? 'visible' : 'hidden'}`,
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            zIndex: 50,
                            display: 'flex',
                            height: '100vh',
                            width: '100%',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            backgroundColor: 'rgba(20, 20, 20, 0.5)',
                            transition: 'all 300ms',
                        }}
                        onClick={closeDrawer}
                        >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                transform: `translateX(${isVisible ? '0' : '-300px'})`,
                                zIndex: 10,
                                height: '100%',
                                width: '300px',
                                backgroundColor: '#121212',
                                fontWeight: 'bold',
                                transition: 'transform 300ms',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                alignItems: 'flex-end',
                                paddingRight: '1rem',
                            }}
                            >
                                {children}
                        </div>
                    </div>,
                    document.getElementById('drawer')
                )
            }
        </>
    )
}
