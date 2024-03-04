'use client';

import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>('');

  const capture = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageData: imageSrc }),
      });
    }
  }, [webcamRef]);

  return (
    <div>
      <Webcam
        audio={false}
        height={400}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        videoConstraints={{
          facingMode: {
            exact: 'user',
            // user - for front camera
            // environment - for back camera
          },
        }}
        width={400}
      />
      {/* {imgSrc && <img src={imgSrc} />} */}

      <button
        onClick={capture}
        className='bg-white/10 rounded-lg border text-base px-4 py-2 '
      >
        Capture
      </button>
    </div>
  );
};
export default Camera;
