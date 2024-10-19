import React, { createContext, useState, useRef, useEffect, useContext, ReactNode } from 'react';
import { gsap } from 'gsap';
import './Collapse.scss';
import { useThemeStore } from '@/store/useThemeStore';

interface CollapseProps {
    children: ReactNode;
}

interface CollapseButtonProps {
    children: ReactNode;
}

interface CollapseContentProps {
    children: ReactNode;
}

interface CollapseContextProps {
    isOpen: boolean;
    toggleOpen: () => void;
}

const CollapseContext = createContext<CollapseContextProps | undefined>(undefined);

const Collapse: React.FC<CollapseProps> & {
    Button: React.FC<CollapseButtonProps>;
    Content: React.FC<CollapseContentProps>;
} = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const { isCollapseOpen, setIsCollapseOpen , isSnackbarOpen, setIsSnackbarOpen} = useThemeStore();

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        setIsCollapseOpen(!isCollapseOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                gsap.to(contentRef.current, { height: 'auto', duration: 1, ease: 'power3.inOut' });
            } else {
                gsap.to(contentRef.current, { height: 0, duration: 1, ease: 'power3.in' });
            }
        }
    }, [isOpen, isCollapseOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // if (!snackBarRef.current) return;
            if (isCollapseOpen) {
                const target = event.target as Node;

                // Get elements by class names near the snackbar
                const banner = document.querySelector('.banner');
                const header = document.querySelector('.header');

                // Check if mouse is not inside snackbarRef, banner, or header
                if (banner && banner.contains(target) || header && header.contains(target)) {
                    setIsCollapseOpen(false);
                    setIsOpen(false);
                    setIsSnackbarOpen(false);
                }
            }
        }

        // Add event listener if isCollapseOpen is true
        // only add event listener if isSnackbarOpen is true to prevent memory leak
        if (isSnackbarOpen) {
            document.addEventListener('mousemove', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousemove', handleClickOutside);
        }

    }, [isCollapseOpen, setIsCollapseOpen, isSnackbarOpen, setIsSnackbarOpen]);


    return (
        <CollapseContext.Provider value={{ isOpen, toggleOpen }}>
            <div className="collapsible">
                {children}
            </div>
        </CollapseContext.Provider>
    );
};

const Button: React.FC<CollapseButtonProps> = ({ children }) => {
    const context = useContext(CollapseContext);
    if (!context) {
        throw new Error('Collapse.Button must be used within a Collapse');
    }
    const { toggleOpen } = context;
    return (
        <div className="collapsible-header" onClick={toggleOpen}>
            {children}
        </div>
    );
};

const Content: React.FC<CollapseContentProps> = ({ children }) => {
    const context = useContext(CollapseContext);
    if (!context) {
        throw new Error('Collapse.Content must be used within a Collapse');
    }
    const { isOpen } = context;
    const { isCollapseOpen } = useThemeStore();

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                gsap.to(contentRef.current, { height: 'auto', duration: 0.5, ease: 'power3.out' });
            } else {
                gsap.to(contentRef.current, { height: 0, duration: 0.5, ease: 'power3.in' });
            }
        }
    }, [isOpen, isCollapseOpen]);

    return (
        <div className="collapsible-content" ref={contentRef}>
            <div className="collapsible-inner">
                {children}
            </div>
        </div>
    );
};

Collapse.Button = Button;
Collapse.Content = Content;

export default Collapse;
