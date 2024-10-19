import { Lenis } from '../../libs/Lenis';
import Sidebar from '../Sidebar/Sidebar';
import './Wrapper.scss';

interface Props {
    theme?: 'light' | 'dark';
    lenis?: boolean;
    lenisOptions?: any;
    className?: string;
    children?: React.ReactNode;
}

const lenisOptionsData = {
    duration: 1.2,
    easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
}

const Wrapper: React.FC<Props> = ({
    children,
    lenis = true,
    lenisOptions = { lenisOptionsData },
    className,
}) => {
    return (
        <>
            {lenis && <Lenis root options={lenisOptions} />}
            <main role="main" className={`${className} main`}>

                {children}

         
            </main>
        </>
    );
};

export { Wrapper };


