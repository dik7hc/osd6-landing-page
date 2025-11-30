import Image from 'next/image';
import type { ComponentPropsWithoutRef, ReactElement } from 'react';
import { Children, isValidElement } from 'react';
import { cn } from './lib/utils';

type MDXComponents = {
    [key: string]: React.ComponentType<any>;
};

// Helper to check if a child is an image element
function isImageElement(child: any): boolean {
    return isValidElement(child) && (child.type === 'img' || (child.props && (child.props as any).src));
}

// Custom image component
function MDXImage(props: ComponentPropsWithoutRef<'img'>) {
    const { src, alt, title } = props;

    if (!src) return null;

    const isExternal = src.startsWith('http://') || src.startsWith('https://');

    return (
        <Image
            src={src}
            alt={alt || ''}
            title={title}
            width={800}
            height={600}
            className="h-full w-full object-cover"
            unoptimized={isExternal}
        />
    );
}

export function getMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Custom paragraph component that detects image groups
        p: (props: ComponentPropsWithoutRef<'p'>) => {
            const children = Children.toArray(props.children);

            // Check if this paragraph contains only images
            const onlyImages = children.every(child => {
                if (typeof child === 'string' && child.trim() === '') return true;
                return isImageElement(child);
            });

            if (onlyImages) {
                const images = children.filter(isImageElement);
                const imageCount = images.length

                if (imageCount === 0) {
                    return <p className="mb-4 leading-relaxed" {...props} />;
                }
                return (
                    <div className={cn({
                        'my-8 grid gap-4 grid-cols-2': imageCount === 2,
                        'my-8 grid gap-4 grid-cols-3': imageCount === 3,
                        'my-8 grid gap-4 grid-cols-4': imageCount >= 4,
                    })}>
                        {images.slice(0, images.length).map((img, index) => {
                            if (!isValidElement(img)) return null;

                            const imgProps = img.props as ComponentPropsWithoutRef<'img'>;
                            const { src, alt, title } = imgProps;

                            return (
                                <div key={index} className={cn("flex flex-col", {
                                    "justify-center items-center": imageCount === 1,
                                })}>
                                    <div
                                        className="overflow-hidden bg-gray-200"
                                        style={imageCount === 1 ? { width: '80%', height: '60%', objectFit: 'cover', objectPosition: 'center' } : {}}
                                    >
                                        <MDXImage src={src} alt={alt} title={title} />
                                    </div>
                                    {title && (
                                        <span className="mt-2 text-center text-sm text-gray-500">
                                            {title}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            }

            // Regular paragraph
            return <p className="mb-4 leading-relaxed" {...props} />;
        },

        // Standalone image component (for images not in paragraphs)
        img: MDXImage,

        // Other custom components
        h1: (props: ComponentPropsWithoutRef<'h1'>) => <h1 className="mb-4 mt-8 text-3xl font-bold" {...props} />,
        h2: (props: ComponentPropsWithoutRef<'h2'>) => <h2 className="mb-3 mt-6 text-2xl font-bold" {...props} />,
        h3: (props: ComponentPropsWithoutRef<'h3'>) => <h3 className="mb-2 mt-4 text-xl font-semibold" {...props} />,
        ul: (props: ComponentPropsWithoutRef<'ul'>) => <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />,
        ol: (props: ComponentPropsWithoutRef<'ol'>) => <ol className="mb-4 ml-6 list-decimal space-y-2" {...props} />,
        li: (props: ComponentPropsWithoutRef<'li'>) => <li className="leading-relaxed" {...props} />,
        blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
            <blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic text-gray-700" {...props} />
        ),
        code: (props: ComponentPropsWithoutRef<'code'>) => (
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm" {...props} />
        ),
        pre: (props: ComponentPropsWithoutRef<'pre'>) => (
            <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white" {...props} />
        ),
        a: (props: ComponentPropsWithoutRef<'a'>) => (
            <a className="text-blue-600 underline hover:text-blue-800" {...props} />
        ),
        ...components,
    };
}
