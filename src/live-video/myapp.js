import React from 'react';
import { setupDatGui } from './option_panel';
import { setupStats } from './stats_panel';
import { runApp } from './tf_utils';

export function MyApp({ handlePoses }) {
    const controlsUI = React.useRef(null);
    const statsUI = React.useRef(null);
    const gui = React.useRef(null);
    const stats = React.useRef(null);
    React.useEffect(() => {
        const initGui = async () => {
            if (controlsUI.current && statsUI.current && !gui.current) {
                stats.current = setupStats(statsUI.current);
                gui.current = await setupDatGui({ model: "movenet", autoPlace: false });
                controlsUI.current.appendChild(gui.current.domElement)
                console.log(stats.current, stats.current.customFpsPanel)
                await runApp(window, stats.current, handlePoses);
            }
        };
        initGui()
    }, [controlsUI.current, statsUI.current])

    return <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div ref={controlsUI}></div>
            <div ref={statsUI}></div>
        </div>
    </div>
}


// -webkit-transform: scaleX(-1);
// transform: scaleX(-1);
// visibility: hidden;
// width: auto;
// height: auto;
