import React, { useRef, Suspense, useMemo, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";

import Header from "../common/Header";
import styled from "styled-components";
import * as THREE from "three";
import { BoxBufferGeometry, BufferAttribute } from "three";
import "./playground.css";
import { softShadows, MeshDistortMaterial } from "@react-three/drei";
// OrbitControlsを使用するためにこのような書き方にしないといけない
// import { OrbitControls, TransformControls } from "three-stdlib";
// extend({ OrbitControls, TransformControls });

const Container = styled.div`
  canvas {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

// soft Shadows
softShadows();
// const Thing = ({ args, color }) => {
//   const ref = useRef();
//   useFrame(() => (ref.current.rotation.z += 0.01));
//   return (
//     <mesh
//       ref={ref}
//       onClick={(e) => console.log("click")}
//       onPointerOver={(e) => console.log("hover")}
//       onPointerOut={(e) => console.log("unhover")}
//     >
//       <planeBufferGeometry attach="geometry" args={args} />
//       <meshBasicMaterial attach="material" color={color} transparent />
//     </mesh>
//   );
// };

function SpiningMesh({ position, args, color, props }) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      castShadow
      position={position}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <meshLambertMaterial attach="material" color={color} />
      <meshStandardMaterial color={hovered ? "lightgreen" : color} />
      {/* <MeshDistortMaterial
        attach="material"
        factor={1} // Strength, 0 disables the effect (default=1)
        speed={10} // Speed (default=1)
      /> */}
    </mesh>
  );
}

// const Cube = () => {
//   return (
//     <mesh>
//       <boxBufferGeometry attach="geometry" />
//       <meshBasicMaterial
//         attach="material"
//         color="hotpink"
//         opacity={0.5}
//         transparent
//       />
//     </mesh>
//   );
// };

// const Scene = () => {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();
//   return (
//     <>
//       <Cube />
//       <orbitControls args={[camera, domElement]} />
//     </>
//   );
// };

// const FakeSphere = () => {
//   return (
//     <mesh>
//       <sphereBufferGeometry
//         args={[5, 32, 32]}
//         position={[-18, -16, 14]}
//         attach="geometry"
//       />
//       <meshBasicMaterial color="red" attach="material" />
//     </mesh>
//   );
// };

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef();
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => {
//     mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
//   });
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(e) => setActive(!active)}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// }

const Playground = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Container>
        {/* fovで奥行きを調節する。値が低いほど前にくる */}
        {/* shadowsで物体に影をつける */}
        {/* positionの第3引数は距離。値が大きければ大きいほど画面の奥の方に表示される*/}
        <Canvas
          colorManagement
          shadows
          camera={{ position: [-5, 2, 10], fov: 60 }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, 0, -20]} intensity={1.5} />
          <group>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}
              receiveShadow
            >
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              {/* <meshStandardMaterial attach="material" color={"yellow"} /> */}
              <shadowMaterial attach="material" opacity={0.3} />
            </mesh>
          </group>
          <SpiningMesh
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color="lightblue"
          />
          <SpiningMesh position={[-2, 1, -5, 0]} color="pink" />
          <SpiningMesh position={[5, 1, -2, 0]} color="pink" />
          {/* <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} /> */}
        </Canvas>
      </Container>
    </div>
  );
};

export default Playground;
