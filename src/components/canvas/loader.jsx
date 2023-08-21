import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
// import Stats from 'three/addons/libs/stats.module.js';

// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

    const model = new Promise((res, rej) => {

   
        const loader = new FBXLoader();
        loader.load( 'space/source/p_887_spaceStation.fbx', function ( object ) {
            object.traverse( function ( child ) {

                if ( child.isMesh ) {

                    child.castShadow = true;
                    child.receiveShadow = true;

                }

            } );

            res( object );
        });

} );
export default model;