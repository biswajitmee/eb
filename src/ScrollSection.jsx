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

studio.initialize();
studio.extend(extension);

export default function ScrollSection() {
  const sheet = getProject("myProject", { state: theatreState }).sheet("Scene");
  return (

    <div style={{  height: "100vh",overflow:"hidden" }}>
    <Canvas style={{ width: "100vw",height: "100vh"  }}  gl={{ preserveDrawingBuffer: true }}>
      {/* <LineOrbit position={[2.5, 20, -16]} /> */}
      {/* <Globe position={[2.5, 20, -16]}/> */}
      <BaseCloud position={[20, 0, 16]} />
      <BackgroundNew position={[-100, 0, 16]} />
      <ScrollControls pages={4} distance={0.5} damping={0.4}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>

        <Scroll html style={{ position: "absolute", width: "100vw" }}>
          <div className="container mx-auto px-4 md:container md:mx-auto ">
            <header class="text-gray-600 body-font">
              <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <span class="ml-3 text-xl text-slate-300">ErrorBurner</span>
                </a>
                <nav class="text-purple-900 md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold	">
                  <a class="mr-5 hover:text-gray-900">Home</a>
                  <a class="mr-5 hover:text-gray-900">About</a>
                  <a class="mr-5 hover:text-gray-900">Services</a>
                  <a class="mr-5 hover:text-gray-900">Contact</a>
                </nav>
                <button class="inline-flex items-center bg-indigo-900 text-indigo-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  Portfolio
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

          <header class=" gradiantBG2 border-x-violet-950 border-y-violet-950 min-h-[60vh] mb-5 rounded-3xl	md:container md:mx-auto lg:container lg:mx-auto ">
            <div className=" flex flex-col-reverse  grid-cols-1 gap-4 lg:grid lg:grid-cols-12 lg:gap-4">
              <div className="lg:col-start-1 lg:col-span-6 pl-20 pt-20 items-center text-base justify-center">
                <p className="text-2xl text-slate-300 p-2 font-semibold ">
                  Welcome our creative world
                </p>
                <p className="text-7xl text-slate-300 p-2 font-semibold	bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 text-transparent">
                  We can build a good product with good process only..
                </p>
                <p className="text-2xl text-slate-300 p-2 font-semibold pt-4">
                  We are Designer and Developer
                </p>
              </div>
              {/* <div className="lg:col-start-7 lg:col-span-12">
                <p className="text-xl text-slate-300 p-28">animation</p>
              </div> */}
            </div>
          </header>

          {/* ---------------2 brother profile photo board------------------ */}

          <div className=" md:container md:mx-auto lg:container lg:mx-auto mb-32 pl-20">
            <p className="text-6xl mt-20 text-slate-300 p-2 pt-20 font-bold	bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 text-transparent 	">
              Who We Are ?
            </p>
            <p className=" text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 text-transparent 	">
              We are two brothers small team.
            </p>

            <p className="text-5xl mt-10 text-slate-300 p-2 pt-10 font-bold	bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 text-transparent 	">
              One is Designer & Frontend developer,
            </p>
            <p className=" text-5xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 text-transparent 	">
              <small>another </small>one is Full-stack developer.
            </p>
          </div>

          <div className=" md:container md:mx-auto lg:container lg:mx-auto pl-20">
            <div>
              <section class="text-gray-600 body-font">
                <div class="container px-5 py-2 mx-auto">
                  <div class="flex flex-wrap -m-4 overflow-y-scroll ">
                  


                    <div class="p-4 lg:w-1/3 ">
                      <div className="card relative ">
                        <div className="bg-[url('/who.jpeg')] backgroundPosition min-h-[550px] rounded-[25px]">
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

                    <div class="p-4 lg:w-1/3 ">
                      <div className="card relative ">
                        <div className="bg-[url('/who.jpeg')] backgroundPosition min-h-[550px] rounded-[25px]">
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

                    <div class="p-4 lg:w-1/3 ">
                      <div className="card relative ">
                        <div className="bg-[url('/who.jpeg')] backgroundPosition min-h-[550px] rounded-[25px]">
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
                   
                    <div class="p-4 lg:w-1/3 ">
                      <div className="card relative ">
                        <div className="bg-[url('/who.jpeg')] backgroundPosition min-h-[550px] rounded-[25px]">
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


                    <div class="p-4 lg:w-1/3 ">
                      <div className="card relative ">
                        <div className="bg-[url('/who.jpeg')] backgroundPosition min-h-[550px] rounded-[25px]">
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
                    
                    <div class="p-4 lg:w-1/3 ">
                      <div className="card relative ">
                        <div className="bg-[url('/who.jpeg')] backgroundPosition min-h-[550px] rounded-[25px]">
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

                    <div class="p-4 lg:w-1/3 ">
                      <div className="card relative ">
                        <div className="bg-[url('/who.jpeg')] backgroundPosition min-h-[550px] rounded-[25px]">
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
                   
                    <div class="p-4 lg:w-1/3 ">
                      <div className="card relative ">
                        <div className="bg-[url('/who.jpeg')] backgroundPosition min-h-[550px] rounded-[25px]">
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

            <p className="text-3xl mt-10 text-slate-300  pt-10 font-bold	bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 text-transparent">
              Development
            </p>
            <p className=" text-3xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 text-transparent">
              Designing
            </p>
          </div>
          <div className=" md:container md:mx-auto lg:container lg:mx-auto pl-20">
            <div class="flex flex-col  text-slate-300">
              <div>Creative website designing</div>
              <div>Creative animation website</div>
              <div>Landing page designing</div>
              <div>UI/UX Designing</div>
            </div>
          </div>
          <div className=" md:container md:mx-auto lg:container lg:mx-auto mb-32 pl-20">
            <p className="text-6xl mt-20 text-slate-300 p-2 pt-20 font-bold	bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 text-transparent 	">
              Our Technologies
            </p>
            <p className=" text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 text-transparent 	">
              tools
            </p>

            <p className="text-3xl mt-10 text-slate-300  pt-10 font-bold	bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 text-transparent">
              Development
            </p>
            <p className=" text-3xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 text-transparent">
              Designing
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
  const bgColor = "#0D0D0D";
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
        far={1000}
        fov={15}
      />
    </>
  );
}