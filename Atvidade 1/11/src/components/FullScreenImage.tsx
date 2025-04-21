'use client'

import React, { useState, useEffect } from 'react';

interface FullscreenImageProps {
    src: string;
    alt: string;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ src, alt }) => {
    const [isFullscreen, setFullscreen] = useState(false);

    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = '';
        }
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                    setFullscreen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <img
                src={src}
                alt={alt}
                style={{
                    cursor: 'pointer',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    padding: '0',
                    margin: '0',
                }}
                onClick={() => setFullscreen(!isFullscreen)}
            />

            {isFullscreen && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 50,
                        padding: '0',
                        margin: '0',
                    }}
                    onClick={() => setFullscreen(false)}
            >
                    <img
                        src={src}
                        alt={alt}
                        style={{
                            maxWidth: '900px',
                            maxHeight: '900px',
                            borderRadius: '4px',
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default FullscreenImage;