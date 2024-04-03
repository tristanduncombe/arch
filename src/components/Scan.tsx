import React from "react";
import Webcam from "react-webcam";
import { BarcodeScanner } from "./scan/barcode";

const Scan: React.FC = () => {
    const webcamRef = React.useRef<Webcam>(null);

    return (
        <div>
            <BarcodeScanner />
        </div>
    );
};

export default Scan;
