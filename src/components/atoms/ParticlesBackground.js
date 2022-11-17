import particleConfig from '../config/particle-config'
import Particles from "react-particles";
import React, { useCallback } from "react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
    const customInit = useCallback(async (engine) => {
        await loadFull(engine);
      });
      
  return (
    <Particles options={particleConfig} init={customInit} ></Particles>
  )
}
