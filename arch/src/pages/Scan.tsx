import React from "react";
import Webcam from "react-webcam";

const Scan: React.FC = () => {
    const webcamRef = React.useRef<Webcam>(null);

    

    return (
        <div>
            <Webcam audio={false} ref={webcamRef} />
        </div>
    );
};

export default Scan;
