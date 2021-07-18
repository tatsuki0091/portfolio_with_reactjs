import React, {useState, useEffect} from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import styles from "./plavgroundThree.scss";
import "./plavgroundThree.scss";
import { useTransition, animated, config } from '@react-spring/web'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
// OrbitControlsを使用するためにこのような書き方にしないといけない
import { OrbitControls, TransformControls } from "three-stdlib";
extend({ OrbitControls, TransformControls });

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}

const Cube = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        color="hotpink"
        opacity={0.5}
        transparent
      />
    </mesh>
  );
};

const Scene = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return (
    <>
      <Cube />
      <orbitControls args={[camera, domElement]} />
    </>
  );
};

const slides = [
    'photo-1544511916-0148ccdeb877',
    'photo-1544572571-ab94fd872ce4',
    'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
    'photo-1540206395-68808572332f',
  ]

const PlaygroundThree = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(index, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    })
    useEffect(() => {
        const t = setInterval(() => set(state => (state + 1) % 4), 5000)
        return () => clearTimeout(t)
      }, [])
  return (
    <div className="flex fill center">
    {transitions((style, i) => (
      <animated.div
        className={styles.bg}
        style={{
          ...style,
          backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
        }}
      />
    ))}
    </div>
  );
};

export default PlaygroundThree;
