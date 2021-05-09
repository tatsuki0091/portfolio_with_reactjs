import { useMemo } from "react";
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

const useTexture = (items) => {
  console.log("items", items);
  const textures = useMemo(
    () =>
      items.map((value) => {
        const item = textureLoader.load(value, (texture) => {
          if (value.mapping) texture.mapping = value.mapping;
          if (value.wrapS) texture.wrapS = value.wrapS;
          if (value.wrapT) texture.wrapT = value.wrapT;
          if (value.repeat) texture.repeat = value.repeat;
          if (value.magFilter) texture.magFilter = value.magFilter;
          if (value.minFilter) texture.minFilter = value.minFilter;
          if (value.anisotropy) {
            texture.anisotropy = value.anisotropy;
          } else texture.anisotropy = 8;
          if (value.encoding) texture.encoding = value.encoding;
        });
        return item;
      }),
    [items]
  );
  return textures;
};

export { useTexture };
