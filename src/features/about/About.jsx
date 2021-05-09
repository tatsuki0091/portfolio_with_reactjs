import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Canvas, useFrame, extend } from "react-three-fiber";
import { useTexture } from "./useTexture";
import { useGLTF } from "@react-three/drei";

import { softShadows, MeshDistortMaterial } from "@react-three/drei";
// OrbitControlsを使用するためにこのような書き方にしないといけない
import { OrbitControls, TransformControls } from "three-stdlib";
extend({ OrbitControls, TransformControls });

function Cont() {
  const table = useGLTF("./baccarat-table.gltf");
  const update = (self) => {
    self.material.map.anisotropy = 8;
    // self.material.map.wrapS = 1001
    // self.material.map.wrapT = 1001
    self.material.map.minFilter = 1008;
    self.material.map.needsUpdate = true;
    console.log("updated", self);
  };

  function Texture({ table }) {
    const texture = useTexture([{ url: "./images/player.png" }]);
    console.log("filter", texture, table.nodes.player.material.map);
    return (
      <mesh
        position={[2, 0, 0]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        geometry={table.nodes.player.geometry}
      >
        <meshStandardMaterial map={texture[0]} />
      </mesh>
    );
  }
  return (
    <group position={[0, 0, 0]}>
      <mesh
        geometry={table.nodes.player.geometry}
        material={table.nodes.player.material}
        onUpdate={update}
      />
      <Texture table={table} />
    </group>
  );
}

const About = () => {
  return (
    <>
      {/* <Canvas
        gl={{ powerPreference: "low-power", antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <Cont />
        </Suspense>
        <orbitControls />
        <ambientLight />
      </Canvas> */}
      <Container fluid className="second-block">
        <div className="row">
          <div className="second-content-img col-12 col-lg-12 col-md-12 col-sm-12">
            <div className="firstblock introduction" id="about">
              <h1 className="content col-12">About me</h1>
              <div className="col-12 mx-auto">
                <p className="article">
                  2014 Mar: Graduated from Kobe Gakuin University.
                </p>
                <p className="article">
                  2014 April: Work as an Operator for MS System Inc.
                </p>
                <p className="article">
                  2016 Feb: Work as an assistanece of system engineer for Soft
                  Hyperion Inc.
                </p>
                <p className="article">
                  2018 Mar: Work as a programmer for Casareal inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
