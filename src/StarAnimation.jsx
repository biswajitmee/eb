import React, { useState, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { usePoints, usePointMaterial } from '@react-three/drei';
import { random } from 'math-random';

function StarAnimation() {
  const { camera } = useThree();
  const ref = useRef();
  const [sphere] = useState(() => {
    const positions = [];
    const count = 5000;
    const radius = 1.5;

    for (let i = 0; i < count; i++) {
      const x = random() * 2 - 1;
      const y = random() * 2 - 1;
      const z = random() * 2 - 1;
      const d = x * x + y * y + z * z;

      if (d < 1) {
        positions.push(x * radius, y * radius, z * radius);
      }
    }

    return new Float32Array(positions);
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  const points = usePoints(() => ({ position: sphere, frustumCulled: false }));
  const material = usePointMaterial(() => ({ transparent: true, color: '#ffa0e0', size: 0.005, sizeAttenuation: true, depthWrite: false }));

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <points>
        <bufferGeometry attach="geometry" {...points} />
        <pointsMaterial attach="material" {...material} />
      </points>
    </group>
  );
}

export default StarAnimation;
