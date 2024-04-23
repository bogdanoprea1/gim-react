import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
const FullScreenGif = ({ src, alt, className, }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const gifRef = useRef(null);
    const toggleFullScreen = () => {
        const current = gifRef.current;
        if (!isFullScreen && current) {
            const requestFullscreen = current.requestFullscreen ||
                current.mozRequestFullScreen ||
                current.webkitRequestFullscreen ||
                current.msRequestFullscreen;
            if (requestFullscreen) {
                requestFullscreen.call(current);
            }
            setIsFullScreen(true);
        }
        else {
            const exitFullscreen = document.exitFullscreen ||
                document.mozCancelFullScreen ||
                document.webkitExitFullscreen ||
                document.msExitFullscreen;
            if (exitFullscreen) {
                exitFullscreen.call(document);
            }
            setIsFullScreen(false);
        }
    };
    return (_jsx("img", { ref: gifRef, src: src, alt: alt, style: { cursor: "pointer", width: "100%", height: "auto" }, onClick: toggleFullScreen, className: className || "" }));
};
export default FullScreenGif;
