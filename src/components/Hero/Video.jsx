import React from "react";

const Video = () => {
    return (
        <div className="flex justify-center items-center bg-gray-900">
            <video
                className="rounded-lg shadow-lg w-full "
         
                autoPlay
                loop
                muted
            >
                <source src="/3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;