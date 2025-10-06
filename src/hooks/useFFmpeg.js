import { useState, useEffect } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import coreURL from '@ffmpeg/core?url';
import wasmURL from '@ffmpeg/core/wasm?url';

export const useFFmpeg = () => {
    const [ffmpeg, setFfmpeg] = useState(null);
    const [isFFmpegReady, setIsFFmpegReady] = useState(false);

    useEffect(() => {
        const loadFFmpeg = async () => {
            const ffmpeg = new FFmpeg();
            ffmpeg.on('log', ({ message }) => {
                // Uncomment the next line to see FFmpeg logs
                // console.log(message);
            });

            try {
                console.log('Loading ffmpeg...');
                await ffmpeg.load({ coreURL, wasmURL });
                setFfmpeg(ffmpeg);
                setIsFFmpegReady(true);
                console.log('ffmpeg loaded');
            } catch (error) {
                console.error('Failed to load FFmpeg:', error);
            }
        };

        loadFFmpeg();
    }, []);

    return { ffmpeg, isFFmpegReady };
};