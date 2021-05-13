import React, {
  useRef,
  useEffect,
  Suspense,
  useMemo,
  useState,
  useContext,
} from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { Text3DFacade } from "troika-3d-text";
import { Text } from "@react-three/drei/core/Text";
import { Controls, useControl } from "react-three-gui";
import * as CANNON from "cannon";

const Container = styled.div`
  canvas {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

function ResponsiveText() {
  const { viewport } = useThree();
  const color = useControl("color", { type: "color", value: "#EC2D2D" });
  const fontSize = useControl("fontSize", {
    type: "number",
    value: 16.5,
    min: 1,
    max: 100,
  });
  const maxWidth = useControl("maxWidth", {
    type: "number",
    value: 90,
    min: 1,
    max: 100,
  });
  const lineHeight = useControl("lineHeight", {
    type: "number",
    value: 0.75,
    min: 0.1,
    max: 10,
  });
  const letterSpacing = useControl("spacing", {
    type: "number",
    value: -0.08,
    min: -0.5,
    max: 1,
  });
  const textAlign = useControl("textAlign", {
    type: "select",
    items: ["left", "right", "center", "justify"],
    value: "justify",
  });
  return (
    <Text
      color={color}
      fontSize={fontSize}
      maxWidth={(viewport.width / 100) * maxWidth}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
    >
      LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
      TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM
      VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA
      COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE
      VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT
      CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID
      EST LABORUM.
    </Text>
  );
}

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
      <meshPhongMaterial attach="material" color="#272727" />
    </mesh>
  );
}
// function TextElement({ position, args, color, props }) {
//   const mesh = useRef(null);
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 2 : 1}
//       onClick={(e) => setActive(!active)}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}
//       castShadow
//       position={position}
//       ref={mesh}
//     >
//       <boxBufferGeometry attach="geometry" args={args} />
//       <meshLambertMaterial attach="material" color={color} />
//       <meshStandardMaterial color={hovered ? "lightgreen" : color} />
//     </mesh>
//   );
// }

function ControlBox() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

// function Plane({ position }) {
//   // Register plane as a physics body with zero mass
//   const ref = useCannon({ mass: 0 }, (body) => {
//     body.addShape(new CANNON.Plane());
//     body.position.set(...position);
//   });
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
//       <meshPhongMaterial attach="material" color="#272727" />
//     </mesh>
//   );
// }

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    console.log(camera);
    //OrbitControlsを初期化
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

function Box({ position }) {
  // Register box as a physics body with mass
  const ref = useCannon({ mass: 100000 }, (body) => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" />
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
      <Container>
        {/* Canvasタグでカメラを設定できる。第3引数でカメラの遠さを設定できる */}
        <Canvas onMouseMove={onMouseMove} camera={{ position: [0, 0, 19.5]}}>
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

render(<PlaygroundTwo />, document.querySelector("#root"));
export default PlaygroundTwo;
