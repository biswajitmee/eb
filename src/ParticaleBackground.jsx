 
 import {Particles} from "particlesjs";
import particaleConfig from "./particaleConfig/Particale-config";

<script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js"></script> 

 


export function ParticaleBackground(props) {
    //const { nodes, materials } = useGLTF("../forest4.glb");
    return (
        <Particles params={particaleConfig}></Particles>

    )}
    export default ParticaleBackground