import React, { useEffect, useRef, useState } from 'react';

const StopWatchApp = () => {
    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);
    const handleStart = () => {
        if (timerRef.current) return;
        timerRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
    };

    const handleStop = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    const handleReset = () => {
        handleStop();
        setSeconds(0);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm text-center space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">🕒 Stopwatch</h1>
                <p className="text-4xl font-mono text-blue-600">{seconds}s</p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleStart}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
                    >
                        Start
                    </button>
                    <button
                        onClick={handleStop}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                    >
                        Stop
                    </button>
                    <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StopWatchApp;
