import React from "react";

const Playground_two = () => {
  return <div></div>;
};

export default Playground_two;

// import React, { useRef, Suspense, useMemo } from "react";
// import { Canvas, useFrame, useLoader } from "react-three-fiber";
// import Header from "../common/Header";
// import styled from "styled-components";
// import * as THREE from "three";
// import circleImg from "../../images/black_dot.svg";
// import { BufferAttribute } from "three";
// import "./playground.css";

// const Container = styled.div`
//   canvas {
//     width: 100vw;
//     height: 100vh;
//     margin: 0;
//     padding: 0;
//   }
// `;

// // function Points() {
// //   const imgTex = useLoader(THREE.TextureLoader, circleImg);
// //   let count = 100;
// //   const sep = 3;
// //   let positions = useMemo(() => {
// //     let positions = [];
// //     for (let xi = 0; xi < count; xi++) {
// //       for (let zi = 0; zi < count; zi++) {
// //         let x = sep * (xi - count / 2);
// //         let z = sep + (zi - count / 2);
// //         let y = 0;
// //         positions.push(x, y, z);
// //       }
// //     }

// //     return new Float32Array(positions);
// //   }, [count, sep]);
// //   return (
// //     <points>
// //       <bufferGeometry attach="geometry">
// //         <BufferAttribute
// //           attachObject={["attribute", "position"]}
// //           array={positions}
// //           count={positions.length / 3}
// //           itemSize={3}
// //         />
// //       </bufferGeometry>
// //       <pointsMaterial
// //         attach="material"
// //         map={imgTex}
// //         color={0x00aaff}
// //         sizeAttenuation
// //         transparent={false}
// //         alphaTest={0.5}
// //         opacity={1.0}
// //       />
// //     </points>
// //   );
// // }

// // function AnimationCanvas() {
// //   return (
// //     // Canvasの中にはthree.jsのものしか書けない

// //     <Canvas
// //       colorManagement={false}
// //       camera={{ position: [100, 10, 0], fov: 75 }}
// //     >
// //       <Suspense fallback={null}>
// //         <Points />
// //       </Suspense>
// //     </Canvas>
// //   );
// // }

// const Thing = () => {
//   const ref = useRef();

//   useFrame(({ clock }) => {
//     ref.current.position.x += Math.cos(clock.getElapsedTime()) * 3;
//     ref.current.position.y += Math.sin(clock.getElapsedTime()) * 3;
//     ref.current.position.z += Math.cos(clock.getElapsedTime()) * 3;
//     ref.current.rotation.y += 0.01;
//   });

//   return (
//     <mesh ref={ref}>
//       <sphereGeometry attach="geometry" args={[300, 30, 30]} />
//       <meshStandardMaterial attach="material" color="#FF0000" />
//     </mesh>
//   );
// };

// const SpinningMesh = ({ position, args, color }) => {
//   const mesh = useRef(null);
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
//   return (
//     <mesh position={position} ref={mesh}>
//       {/* boxBufferGeometryで四角のボックスを作成argsを全て1に設定しているので正方形が出力される */}
//       <boxBufferGeometry attach="geometry" args={args} />
//       {/* circleBufferGeometryで円を作成する。argsの第二引数を大きくするほど円の角張がなくなる */}
//       {/* <circleBufferGeometry attach="geometry" args={[1, 200]} /> */}
//       {/* 図形の色をmaterialで黒に設定 */}
//       <meshStandardMaterial attach="material" color={color} />
//     </mesh>
//   );
// };

// const Playground = () => {
//   return (
//     <div>
//       <header></header>
//       <Container>
//         {/* <Suspense failback={<div>loading...</div>}>
//           <AnimationCanvas />
//         </Suspense> */}
//         <Canvas colorManagement={{ position: [-5, 2, 10], for: 60 }}>
//           {/* 図形の薄さをきめる intensityの値が高ければ高いほど白色に近づく*/}
//           <ambientLight intensity={0.3} />
//           <directionalLight
//             position={[0, 18, 0]}
//             intensity={1}
//             shadow-mapSize-shadowMapWidth={1024}
//             shadow-mapSize-shadowMapHeight={1024}
//             shadow-camera-far={50}
//             shadow-camera-left={-10}
//             shadow-camera-right={10}
//             shadow-camera-top={10}
//             shadow-camera-bottom={-10}
//           />
//           <pointLight position={[-10, 0, -20]} intensity={0.5} />
//           <pointLight position={[0, -10, 0]} intensity={1.5} />
//           <group>
//             <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
//               <planeBufferGeometry attach="geometry" args={(100, 1200)} />
//               {/* This will need to cast a shadow */}
//               <meshStandardMaterial attach="material" color={"yellow"} />
//             </mesh>
//           </group>
//           <SpinningMesh
//             position={[0, 1, 0]}
//             args={[3, 2, 1]}
//             color="lightblue"
//           />
//           <SpinningMesh position={[-8, 1, -5]} color="pink" />
//           <SpinningMesh position={[5, 1, -2]} color="pink" />
//         </Canvas>
//       </Container>
//     </div>
//   );
// };

// export default Playground;
