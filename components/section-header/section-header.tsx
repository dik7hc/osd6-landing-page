import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface SectionHeaderProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const SectionHeader = ({ children, className, id }: SectionHeaderProps) => {
    return (
        <h2 
            id={id}
            className={cn(
                "mb-10 text-2xl font-semibold tracking-wide md:text-4xl",
                className
              )}
        >
            {children}
        </h2>
    )
}

export default SectionHeader