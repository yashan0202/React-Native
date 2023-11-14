import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { useAnimations } from 'react-three-fiber';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

export default function ModelViewer() {
  const modelRef = useRef();
  const modelAnimations = useAnimations(modelRef);

  useEffect(() => {
    const loader = new GLTFLoader();
    const url = 'Model.png';

    loader.load(url, (gltf) => {
      const model = gltf.scene;

      modelAnimations.reset(model.animations);
      modelAnimations.play(modelAnimations.names);

      modelRef.current = model;
    });

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <primitive object={modelRef.current} />
    </View>
  );
}
