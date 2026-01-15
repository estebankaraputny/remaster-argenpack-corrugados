import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import "./BoxMeasures.css";

// Define props for the Box component for type safety
interface BoxProps {
    width: number;
    height: number;
    depth: number;
}

// This is the 3D Box component that will be rendered in the Canvas
const Box = ({ width, height, depth }: BoxProps) => {
    return (
        <mesh>
            <boxGeometry args={[width, height, depth]} />
            <meshStandardMaterial color="#ad8762" />
        </mesh>
    );
};

const BoxMeasures = () => {
    const [width, setWidth] = useState(20);
    const [height, setHeight] = useState(10);
    const [depth, setDepth] = useState(15);

    return (
        <section className="box-measures-section" data-aos="zoom-in-left">
            <h2 className="box-measures-title">Visualizador de Cajas 3D</h2>
            <div className="box-measures-wrapper">
                <div className="box-measures-controls">
                    <h3>Ajustá las Medidas</h3>
                    <div className="control-group">
                        <label htmlFor="width">Ancho (cm)</label>
                        <input
                            type="number"
                            id="width"
                            name="width"
                            value={width}
                            onChange={(e) => setWidth(Number(e.target.value))}
                            step="1"
                        />
                    </div>
                    <div className="control-group">
                        <label htmlFor="height">Alto (cm)</label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            step="1"
                        />
                    </div>
                    <div className="control-group">
                        <label htmlFor="depth">Profundidad (cm)</label>
                        <input
                            type="number"
                            id="depth"
                            name="depth"
                            value={depth}
                            onChange={(e) => setDepth(Number(e.target.value))}
                            step="1"
                        />
                    </div>
                </div>
                <div className="box-measures-canvas">
                    <Canvas camera={{ position: [4, 3, 5], fov: 5 }}>
                        <ambientLight intensity={0.9} />
                        <directionalLight position={[10, 10, 5]} intensity={2} />
                        <Suspense fallback={null}>
                            <Box width={width / 100} height={height / 100} depth={depth / 100} />
                        </Suspense>
                        <Grid infiniteGrid cellColor="white" sectionColor="white" fadeDistance={25} />
                        <OrbitControls autoRotate />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}

export default BoxMeasures;