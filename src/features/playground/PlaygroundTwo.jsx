import React, { useRef, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Canvas, useThree, useFrame } from "react-three-fiber";
import * as CANNON from "cannon";
import { useBox } from "@react-three/cannon";
import Header from "../common/Header";

const Container = styled.div`
  canvas {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

const context = React.createContext();
export function Provider({ children }) {
  // Set up physics
  const [world] = useState(() => new CANNON.World());
  useEffect(() => {
    world.broadphase = new CANNON.NaiveBroadphase();
    world.solver.iterations = 10;
    world.gravity.set(0, 0, -25);
  }, [world]);

  // Run world stepper every frame
  useFrame(() => world.step(1 / 60));
  // Distribute world via context
  return <context.Provider value={world} children={children} />;
}

export function useCannon({ ...props }, fn, deps = []) {
  const ref = useRef();
  // Get cannon world object
  const world = useContext(context);
  // Instanciate a physics body
  const [body] = useState(() => new CANNON.Body(props));
  useEffect(() => {
    // Call function so the user can add shapes
    fn(body);
    // Add body to world on mount
    world.addBody(body);
    // Remove body on unmount
    return () => world.removeBody(body);
  }, deps);

  useFrame(() => {
    if (ref.current) {
      // Transport cannon physics into the referenced threejs object
      ref.current.position.copy(body.position);
      ref.current.quaternion.copy(body.quaternion);
    }
  });

  return ref;
}

function Plane({ position }) {
  // Register plane as a physics body with zero mass
  const ref = useCannon({ mass: 0 }, (body) => {
    body.addShape(new CANNON.Plane());
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#FFFFFF" />
    </mesh>
  );
}

// function ControlBox() {
//   return (
//     <mesh position={[0, 0, 0]}>
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// }

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    //OrbitControlsを初期化
    // const controls = new OrbitControls(camera, gl.domElement);
    // controls.minDistance = 3;
    // controls.maxDistance = 20;
    // return () => {
    //   controls.dispose();
    // };
  }, [camera, gl]);
  return null;
};

// function PhyBox(props) {
//   const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));

//   return (
//     <Box
//       args={[1, 1, 1]}
//       ref={ref}
//       onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])}
//     >
//       <meshNormalMaterial />
//     </Box>
//   );
// }

function changePosition(position) {
  var firstArgument = Math.floor(Math.random() * 31);
  var secondArgument = Math.floor(Math.random() * 31);
  var thirdArgument = Math.floor(Math.random() * 31);
  console.log(position);
}

function Box({ position }) {
  //const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  // Register box as a physics body with mass
  const refCannon = useCannon({ mass: 100000 }, (body) => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
    body.position.set(...position);
  });
  return (
    <mesh
      ref={refCannon}
      castShadow
      receiveShadow
      onClick={() => {
        changePosition(position);
      }}
    >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color={"lightgreen"} />
    </mesh>
  );
}

const PlaygroundTwo = () => {
  const [showPlane, set] = useState(true);
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const onMouseMove = (e) => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0,
    ]);
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <Container>
        {/* Canvasタグでカメラを設定できる。第3引数でカメラの遠さを設定できる */}
        <Canvas onMouseMove={onMouseMove} camera={{ position: [0, 0, 19.5] }}>
          <CameraController />
          {/* 光源を設定してあげないと物体に色はつかない */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Provider>
            <Plane position={[0, 0, -10]} />
            {showPlane && <Plane position={[0, 0, 0]} />}
            <Box position={[2, -1, 13]} />
            <Box position={[1, 0, 1]} />
            <Box position={[2, 1, 5]} />
            <Box position={[0, 0, 6]} />
            <Box position={[-1, 1, 8]} />
            <Box position={[-2, 2, 13]} />
            <Box position={[2, -1, 13]} />
            {!showPlane && <Box position={[0.5, 1.0, 20]} />}
          </Provider>
          {/* <ControlBox /> */}
        </Canvas>
      </Container>
    </>
  );
};

export default PlaygroundTwo;
