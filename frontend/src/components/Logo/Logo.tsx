import Image from 'next/image';
import './Logo.scss';

export const Logo = () => {
    return (
        <Image src="/images/logo/logo.svg" alt="Logo" width={0} height={0} className='logo' />
    );
}

