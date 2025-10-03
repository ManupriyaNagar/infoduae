import React from "react";

const Video = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <video
                className="rounded-lg shadow-lg w-full max-w-3xl"
                controls
                autoPlay
                loop
                muted
            >
                <source src="/videos/sample.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;