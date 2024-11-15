import React from 'react';
import './Footer.scss';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className='left'>
                    <Image src="/images/logo/logo-w.svg" alt="logo" width={207} height={104} />
                </div>
                <div className='right'>
                    <div className="nav">
                        <h3 className='h1'>Contact Me</h3>
                        <ul>
                            <li>
                                <Link href={'/'}>Email Me</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav">
                        <h3 className='h1'>Stay in Touch</h3>
                        <ul>
                            <li>
                                <Link href={'/'}>LinkedIn</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Instagram</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className='text-center'>made proudly by Alexander Neumann</p>

        </footer>

    )
}

export default Footer;