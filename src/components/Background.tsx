import { useEffect, useRef, useState } from 'react';


// approx 1cm apart
const GRID_SIZE = 30;


export default function Background() {

    // keep track of mouse pos
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);


    // access the canvas HTML element
    const backgroundRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        // check if mobile
        if (window.innerWidth <= 768) {
            setIsMobile(true);
            setMousePos({
                x: window.innerWidth / 2,
                y: 0,
            });
            return;
        }
        else {
            setIsMobile(false);
        }

        // event handler to check mouse pos
        const handleMouseMove = (e: MouseEvent) => {
            if (backgroundRef.current) {
                const rect = backgroundRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    // function to draw the grid of dots
    const genGrid = () => {
        const dots = [];
        if (backgroundRef.current) {
            const { width, height } = backgroundRef.current.getBoundingClientRect();
            for (let x = 0; x < width; x += GRID_SIZE) {
                for (let y = 0; y < height; y += GRID_SIZE) {

                    // increase opacity for dots close to the mouse
                    const dist = Math.sqrt((x - mousePos.x) ** 2 + (y - mousePos.y) ** 2);
                    const opacity = 1 - Math.min(1, dist / (isMobile ? 500 : 300));

                    // push HTML element to dots array
                    dots.push(
                        <div
                            key = {`${x}-${y}`}
                            className="absolute rounded-full bg-gray-200"
                            style={{
                                width: '2px',
                                height: '2px',
                                top: `${y}px`,
                                left: `${x}px`,
                                opacity,
                            }}
                        />
                    )
                }
            }
        }
        return dots;
    }

    return (
        <div
            ref={backgroundRef}
            className="fixed inset-0 bg-gray-800"
            style={{ perspective: '1000px' }}
        >
            {genGrid()}
        </div>
    )
    


}