
import Button from '@/components/Button/Button';
import './Snackbar.scss';
import { GoogleEyes } from '../GoogleEyes/GoogleEyes';
import Collapse from '../Collapse/Collapse';
import React from 'react';
import { useThemeStore } from '@/store/useThemeStore';

const Snackbar = ({ }) => {
    const snackBarRef = React.useRef(null);
    const { isCollapseOpen, setIsCollapseOpen, isSnackbarOpen, setIsSnackbarOpen } = useThemeStore();

    const handleOnClick = () => {
        setIsSnackbarOpen(!isSnackbarOpen);
    }

    return (
        <div className="snackbar" ref={snackBarRef}>
            <Collapse>
                <Collapse.Button>
                    <Button variant='secondary' split={false} onClick={handleOnClick}>What’s here?
                        <GoogleEyes />
                    </Button>
                </Collapse.Button>
                <Collapse.Content>
                    <div className='snackbar-content'>
                        <p className='h2'>Nothin but our love for you.</p>
                        <p className='h4'>We like you&apos;re curious. You like to discover.</p>
                        <p className='h4'>The little things that matter. So we found a video just for you.</p>
                        <Button variant='secondary' split={true} href="https://www.youtube.com/watch?v=bzLaL0SVwwI" className='btn-icon' >Watch this video
                            <i className='icon-akn icon-diagonal-arrow '></i>
                        </Button>
                    </div>
                </Collapse.Content>
            </Collapse>
        </div>
    )
}

export default Snackbar;