'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { ArrowUp, ChevronUp } from 'lucide-react';

const BackToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return <div className="fixed bottom-6 right-6 z-50">
        {isVisible && (
            <button
                onClick={scrollToTop}
                className="rounded-full bg-gray-700 p-3 text-white shadow-lg transition-all hover:bg-gray-900"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        )}
    </div>
}

export default BackToTopBtn