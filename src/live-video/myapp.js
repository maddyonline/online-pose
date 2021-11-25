import React from 'react';
import { setupDatGui } from './option_panel';
import { runApp } from './tf_utils';

export function MyApp() {
    const controlsUI = React.useRef(null);
    const gui = React.useRef(null);
    React.useEffect(() => {
        const initGui = async () => {
            if (controlsUI.current) {
                gui.current = await setupDatGui({ model: "movenet", autoPlace: false });
                controlsUI.current.appendChild(gui.current.domElement)
                await runApp(window);
            }
        };
        initGui()
    }, [controlsUI.current])
    return <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div id="stats"></div>
        <div id="main">

            <div className="container">
                <div className="canvas-wrapper">
                    <canvas id="output"></canvas>
                    <video id="video" playsInline style={{
                        visibility: 'hidden',
                        transform: 'scaleX(-1)',
                        width: 'auto',
                        height: 'auto'
                    }}>
                    </video>
                </div>
                <div id="scatter-gl-container"></div>
            </div>
        </div>
        <div ref={controlsUI} id="abc"></div>
    </div>
}


// -webkit-transform: scaleX(-1);
// transform: scaleX(-1);
// visibility: hidden;
// width: auto;
// height: auto;
