import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Gltf,
  ScrollControls,
  useScroll,
  Scroll,
  Points,
  PointMaterial,
} from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import theatreState from "./theatreState.json";
import { motion } from "framer-motion";

import {
  editable as e,
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import LineOrbit from "./LineOrbit";

import BackgroundNew from "./BackgroundNew";
import Globe from "./Globe";
import BaseCloud from "./BaseCloud";
import HeroText from "./HeroText";
import HolaSpesh from "./HolaSpesh";
import Fusion from "./Fusion";
import TextInView from "./TextInView";

// studio.initialize();
// studio.extend(extension);










export default function ScrollSection() {
  const sheet = getProject("myProject", { state: theatreState }).sheet("Scene");
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        gl={{ preserveDrawingBuffer: true }}
      >
        {/* <LineOrbit position={[2.5, 20, -16]} />
        <Globe position={[2.5, 20, -16]}/> */}
        {/* <BaseCloud position={[20, 0, 16]} /> */}

        <Fusion position={[0, 0, -30]} />
        <BackgroundNew position={[50, 0, -30]} />

        {/* <HolaSpesh position={[-100, 0, 16]} /> */}

        <ScrollControls pages={5} distance={1.5} damping={0.4}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>

          <Scroll html style={{ position: "absolute", width: "100vw" }}>
            <div className="container mx-auto px-4 md:container md:mx-auto ">
              <header class="text-gray-600 body-font mt-10 mb-10">
                <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center  border-gradient-3 ">
                  <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <img src="logo.png" />
                  </a>
                  <nav class=" md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold text-slate-400	">
                    <a class="mr-5 hover:text-gray-900">Home</a>
                    <a class="mr-5 hover:text-gray-900">About</a>
                    <a class="mr-5 hover:text-gray-900">Services</a>
                    <a class="mr-5 hover:text-gray-900">Contact</a>
                  </nav>
                  <button class="inline-flex items-center bg-indigo-900 text-indigo-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Let's Chat
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </header>
            </div>

            {/* ---------------header big text and animation------------------ */}

            <header class=" gradiantBG2 border-x-violet-950 border-y-violet-950 min-h-[60vh] mt-[-115px] rounded-2xl	md:container md:mx-auto lg:container lg:mx-auto ">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2">
                  <div className="lg:col-start-1 lg:col-span-6 pl-20 pt-20 items-center text-base justify-center">
                    <div className="h-[300px] pt-[50px]">
                      <h1 className="text-5xl font-semibold txt-gradient leading-[95px]	">
                        {" "}
                        <HeroText />
                      </h1>
                    </div>


                    

                    <div class="flex flex-row nav-bg-trns text-md font-semibold	 rounded text-violet-500 mt-4">
                      <button class="p-3 ">Save Changes</button>
                      <div className="p-3">Research</div>
                      <div className="p-3">Designing</div>
                      <div className="p-3">Development</div>
                      <div className="p-3">Deployment</div>
                      <div className="p-3  ">
                        <motion.img
                         initial={{
                          x: 0,
                          y: 0,
                          scale: 1,
                          rotate: 0,
                        }}
                        animate={{
                          x: 0,
                          y: 0,
                          scale: 1,
                          rotate: 360,
                        }}
                        transition={{
                          duration: 4, // Duration of one complete rotation (in seconds)
                          loop: Infinity, // Infinite loop
                          ease: "linear", // Linear easing for a smooth rotation
                        }}
                          src="experience.png"
                          alt="Rotating Wheel"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="">05</div>
              </div>
            </header>

            {/* ---------------2 brother profile photo board------------------ */}

            <div className=" md:container md:mx-auto lg:container lg:mx-auto mb-32 pl-24">
              <div className="text-6xl txt-gradnt-330 font-bold	">
                <p>
                  Meet the Dynamic Duo behind mind-blowing designs and
                  cutting-edge animations. Elevate your web presence with our
                  out-of-the-box brilliance for captivating landing pages, From
                  captivating e-commerce platforms to seamless web applications,
                  experience a revolution in digital excellence."
                </p>
              </div>
            </div>

            <div className=" md:container md:mx-auto lg:container lg:mx-auto pl-20">
              <div>
                <section class="text-gray-600 body-font">
                  <div class="container px-5 py-2 mx-auto">
                    <div class="flex flex-wrap -m-4">
                      <div class="p-4 lg:w-1/3 ">
                        <div className="card relative ">
                          <div className="bg-[url('/lord.jpg')] backgroundPosition min-h-[550px] rounded-[25px]">
                            <div class=" gradiantBG min-h-[130px] absolute bottom-0 left-0 w-full mb-20 pl-12">
                              <h1 class=" text-gray-100 pt-9 pl-5">
                                Designer & Frontend Developer
                              </h1>
                              <h1 class=" text-gray-100 pl-5 tracking-[.35em]">
                                Biswajit Halder
                              </h1>
                            </div>
                          </div>
                          <div class="flex flex-row text-4xl p-3 text-center">
                            <div className="p-2 w-16">
                              <img src="fb.svg" />
                            </div>
                            <div className="p-2 w-16">
                              <img src="dribble.svg" />
                            </div>
                            <div className="p-2 w-16">
                              <img src="skype.svg" />
                            </div>
                            <div className="p-2 w-16">
                              <img src="github.svg" />
                            </div>
                            <div className="p-2 w-16">
                              <img src="pinterest.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className=" md:container md:mx-auto lg:container lg:mx-auto mb-32 pl-20">
              <p className="text-6xl mt-20 text-slate-300 p-2 pt-20 font-bold	bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 text-transparent 	">
                What we offer ?
              </p>
              <p className=" text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 text-transparent 	">
                Specialization
              </p>
            </div>

            <div className="md:container md:mx-auto lg:container lg:mx-auto">
              <div class="grid grid-cols-2 we-offer gap-4 lg:m-[100px] md:m-[100px]">
                <div class="blk-bg-trans rounded-tl-[20px] rounded-bl-[20px]">
                  <div class="flex flex-col p-10 txt-gradient2 text-2xl	font-semibold">
                    <div className="p-7  line-gradint">UI / UX Design </div>
                    <div className="p-7  line-gradint">Animation</div>
                    <div className="p-7  line-gradint">3d Design</div>
                    <div className="p-7  line-gradint">Web Development</div>
                    <div className="p-7  line-gradint">Mobile App</div>
                  </div>
                </div>

                <div class="">blank component</div>
              </div>
            </div>

            <div className=" md:container md:mx-auto lg:container lg:mx-auto mb-32 pl-20">
              <p className="text-6xl mt-20 text-slate-300 p-2 pt-20 font-bold	bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 text-transparent 	">
                Our Technologies
              </p>
              <p className=" text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 text-transparent 	">
                tools
              </p>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });
  const bgColor = "#100D14";
  return (
    <>
      <ambientLight intensity={1} />
      <color attach="background" args={[bgColor]} />
      {/* <fog attach="fog" color={bgColor}  />        */}
      {/* fov=100,far=500,near2 basic attractive look for prince planet */}
      <e.pointLight theatreKey="LightRed" position={[-0, -0, -0]} />
      <e.pointLight theatreKey="LightBlue" position={[-0, -0, -0]} />
      <e.pointLight theatreKey="orbitlight" position={[2.5, 20, -16]} />
      <e.pointLight theatreKey="orbitlight2" position={[2.5, 19, -16]} />
      {/* <directionalLight position={[-5, 5, -5]} intensity={1.5} color="blue" />  */}

      {/* <e.mesh theatreKey="forest1"  position={[-48.532, -59.511, -103]}>
      <Gltf src="/forest1.glb" castShadow receiveShadow />
        </e.mesh>*/}
      {/* <e.mesh theatreKey="forest2" position={[-50, 15, 0]}>
      <Gltf src="/forest2.glb" castShadow receiveShadow />
        </e.mesh>
        <e.mesh theatreKey="forest3" position={[-80, 15, 0]}>
      <Gltf src="/forest3.glb" castShadow receiveShadow />
        </e.mesh> */}

      {/*         
        <e.mesh theatreKey="forest4" position={[-110, 15, 0]}>
      <Gltf src="/forest4.glb" castShadow receiveShadow />
        </e.mesh>  */}
      {/* <e.mesh theatreKey="prince" position={[38, 16, -68]}>
      <Gltf src="../PrincePlanet.glb" castShadow receiveShadow />
        </e.mesh> */}

      {/* <e.mesh theatreKey="spiral" position={[0, 0, -2]}>
<Gltf src="/SpiralsAnimation.glb" castShadow receiveShadow />
        </e.mesh>  */}

      {/* <OrbitControls /> */}

      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        near={5}
        far={500}
        fov={15}
      />
    </>
  );
}
