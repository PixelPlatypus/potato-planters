import { Float, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Euler, Group, Vector3 } from "three";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";
import { Background } from "./Background";
import { TextSection } from "./TextSection";

import CloudModel from "../models/CloudModel";
import TimeMachineModel from "../models/TimeMachineModel";
import BlackHoleModel from "../models/BlackHoleModel";
import PlanetModel from "../models/PlanetModel";
import AsteroidModel from "../models/AsteroidModel";
import AlienVirusModel from "../models/AlienVirusModel";
import AquaLifeModel from "../models/AquaLifeModel";
import CockroachModel from "../models/CockroachModel";
import AirplaneModel from "../models/AirplaneModel";

const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;
const FRICTION_DISTANCE = 42;

const curvePoints = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 50, -CURVE_DISTANCE), // Title
  new THREE.Vector3(50, 0, -1.5 * CURVE_DISTANCE), // Detail
  new THREE.Vector3(-50, 40, -2 * CURVE_DISTANCE), // Image
  new THREE.Vector3(50, 20, -3 * CURVE_DISTANCE), // Title
  new THREE.Vector3(-50, 75, -3.25 * CURVE_DISTANCE), // Subtopic
  new THREE.Vector3(100, 20, -4 * CURVE_DISTANCE), // Subtopic
  new THREE.Vector3(-100, -100, -5 * CURVE_DISTANCE), // Title
  new THREE.Vector3(100, 0, -5.5 * CURVE_DISTANCE), // Subtopic
  new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE), // Subtopic
];

const textSections = [
  {
    cameraRailDist: -1,
    position: new Vector3(
      curvePoints[1].x - 3,
      curvePoints[1].y,
      curvePoints[1].z,
    ),
    text: {
      title: "Welcome to Roast-3369,",
      subtitle: `Have a seat and enjoy the ride!`,
    },
  },
  {
    cameraRailDist: 1.5,
    position: new Vector3(
      curvePoints[2].x + 2,
      curvePoints[2].y,
      curvePoints[2].z,
    ),
    text: {
      title: "Composition",
      subtitle: "This planet is made up of diffent cores like..........",
    },
  },
  {
    cameraRailDist: -1,
    position: new Vector3(
      curvePoints[3].x - 3,
      curvePoints[3].y,
      curvePoints[3].z,
    ),
    text: {
      title: "Where life starts?",
      subtitle: "Life started after the formation of organic compounds...",
    },
  },
  {
    cameraRailDist: 1.7,
    position: new Vector3(
      curvePoints[4].x,
      curvePoints[4].y + 2,
      curvePoints[4].z,
    ),
    // rotation: new Euler(Math.PI / 4.2, Math.PI / 3.5, Math.PI * 1.8),
    text: {
      title: "Ocean life",
      subtitle:
        "After researching about ocean life, we have simulated a model....",
    },
  },
  {
    cameraRailDist: 1.5,
    position: new Vector3(
      curvePoints[5].x + 3.5,
      curvePoints[5].y,
      curvePoints[5].z,
    ),
    // rotation: new Euler(Math.PI / 9, Math.PI / 32, Math.PI / 16),
    text: {
      title: "Macro life",
      subtitle:
        "After researching about macro life, we have simulated a model....",
    },
  },
  {
    cameraRailDist: 1.5,
    position: new Vector3(
      curvePoints[6].x - 3.5,
      curvePoints[6].y - 5,
      curvePoints[6].z - 12,
    ),
    text: {
      title: "Intelligent life",
      subtitle:
        "Due to the harsh conditions in the planet, chances of intelligent life is slim...",
    },
  },
  {
    cameraRailDist: 1.5,
    position: new Vector3(
      curvePoints[7].x + 3.5,
      curvePoints[7].y,
      curvePoints[7].z - 12,
    ),
    text: {
      title: "Dream more",
      subtitle:
        "This is just a simulation, we can't predict the future of this planet...",
    },
  },
];

const models = [
  {
    component: PlanetModel,
    scale: new Vector3(10, 10, 10),
    position: new Vector3(
      curvePoints[1].x + 23,
      curvePoints[1].y,
      curvePoints[1].z - 30,
    ),
  },
  {
    component: AsteroidModel,
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[2].x,
      curvePoints[2].y - 10,
      curvePoints[2].z,
    ),
  },
  {
    component: AlienVirusModel,
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[3].x + 10,
      curvePoints[3].y,
      curvePoints[3].z - 20,
    ),
  },
  {
    component: AquaLifeModel,
    scale: new Vector3(15, 15, 15),
    position: new Vector3(
      curvePoints[4].x - 5,
      curvePoints[4].y - 1,
      curvePoints[4].z - 10,
    ),
  },
  {
    component: CockroachModel,
    scale: new Vector3(5, 5, 5),
    position: new Vector3(
      curvePoints[5].x + 5,
      curvePoints[5].y - 2.5,
      curvePoints[5].z - 20,
    ),
  },
  {
    component: AirplaneModel,
    scale: new Vector3(2, 2, 2),
    position: new Vector3(
      curvePoints[6].x - 10,
      curvePoints[6].y - 5,
      curvePoints[6].z - 20,
    ),
  },
];

const clouds = [
  {
    position: new Vector3(-3.5, -3.2, -7),
  },
  {
    position: new Vector3(3.5, -4, -10),
  },
  {
    scale: new Vector3(4, 4, 4),
    position: new Vector3(-18, 0.2, -68),
    rotation: new Euler(-Math.PI / 5, Math.PI / 6, 0),
  },
  {
    scale: new Vector3(2.5, 2.5, 2.5),
    position: new Vector3(10, -1.2, -52),
  },
  // FIRST POINT
  {
    scale: new Vector3(4, 4, 4),
    position: new Vector3(
      curvePoints[1].x + 10,
      curvePoints[1].y - 4,
      curvePoints[1].z + 64,
    ),
  },
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[1].x - 20,
      curvePoints[1].y + 4,
      curvePoints[1].z + 28,
    ),
    rotation: new Euler(0, Math.PI / 7, 0),
  },
  {
    rotation: new Euler(0, Math.PI / 7, Math.PI / 5),
    scale: new Vector3(5, 5, 5),
    position: new Vector3(
      curvePoints[1].x - 13,
      curvePoints[1].y + 4,
      curvePoints[1].z - 62,
    ),
  },
  {
    rotation: new Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
    scale: new Vector3(5, 5, 5),
    position: new Vector3(
      curvePoints[1].x + 54,
      curvePoints[1].y + 2,
      curvePoints[1].z - 82,
    ),
  },
  {
    scale: new Vector3(5, 5, 5),
    position: new Vector3(
      curvePoints[1].x + 8,
      curvePoints[1].y - 14,
      curvePoints[1].z - 22,
    ),
  },
  // SECOND POINT
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[2].x + 6,
      curvePoints[2].y - 7,
      curvePoints[2].z + 50,
    ),
  },
  {
    scale: new Vector3(2, 2, 2),
    position: new Vector3(
      curvePoints[2].x - 2,
      curvePoints[2].y + 4,
      curvePoints[2].z - 26,
    ),
  },
  {
    scale: new Vector3(4, 4, 4),
    position: new Vector3(
      curvePoints[2].x + 12,
      curvePoints[2].y + 1,
      curvePoints[2].z - 86,
    ),
    rotation: new Euler(Math.PI / 4, 0, Math.PI / 3),
  },
  // THIRD POINT
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[3].x + 3,
      curvePoints[3].y - 10,
      curvePoints[3].z + 50,
    ),
  },
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[3].x - 10,
      curvePoints[3].y,
      curvePoints[3].z + 30,
    ),
    rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
  },
  {
    scale: new Vector3(4, 4, 4),
    position: new Vector3(
      curvePoints[3].x - 20,
      curvePoints[3].y - 5,
      curvePoints[3].z - 8,
    ),
    rotation: new Euler(Math.PI, 0, Math.PI / 5),
  },
  {
    scale: new Vector3(5, 5, 5),
    position: new Vector3(
      curvePoints[3].x + 0,
      curvePoints[3].y - 5,
      curvePoints[3].z - 98,
    ),
    rotation: new Euler(0, Math.PI / 3, 0),
  },
  // FOURTH POINT
  {
    scale: new Vector3(2, 2, 2),
    position: new Vector3(
      curvePoints[4].x + 3,
      curvePoints[4].y - 10,
      curvePoints[4].z + 2,
    ),
  },
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[4].x + 24,
      curvePoints[4].y - 6,
      curvePoints[4].z - 42,
    ),
    rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
  },
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[4].x - 4,
      curvePoints[4].y + 9,
      curvePoints[4].z - 62,
    ),
    rotation: new Euler(Math.PI / 3, 0, Math.PI / 3),
  },
  // FINAL
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[7].x + 12,
      curvePoints[7].y - 5,
      curvePoints[7].z + 60,
    ),
    rotation: new Euler(-Math.PI / 4, -Math.PI / 6, 0),
  },
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[7].x - 12,
      curvePoints[7].y + 5,
      curvePoints[7].z + 120,
    ),
    rotation: new Euler(Math.PI / 4, Math.PI / 6, 0),
  },
  // Eighth
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[8].x + 12,
      curvePoints[8].y - 5,
      curvePoints[8].z + 60,
    ),
    rotation: new Euler(-Math.PI / 4, -Math.PI / 6, 0),
  },
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[8].x - 12,
      curvePoints[8].y + 5,
      curvePoints[8].z + 120,
    ),
    rotation: new Euler(Math.PI / 4, Math.PI / 6, 0),
  },
  {
    scale: new Vector3(4, 4, 4),
    position: new Vector3(curvePoints[8].x, curvePoints[8].y, curvePoints[8].z),
    rotation: new Euler(0, 0, 0),
  },
  {
    scale: new Vector3(3, 3, 3),
    position: new Vector3(
      curvePoints[8].x + 10,
      curvePoints[8].y,
      curvePoints[8].z - 200,
    ),
    rotation: new Euler(0, 0, 0),
  },
];

export const Experience = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, []);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);
    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const cameraRail = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);

    let friction = 1;
    let resetCameraRail = true;

    textSections.forEach((textSection) => {
      const distance = textSection.position.distanceTo(
        cameraGroup.current.position,
      );

      if (distance < FRICTION_DISTANCE) {
        friction = Math.max(distance / FRICTION_DISTANCE, 0.1);
        const targetCameraRailPosition = new Vector3(
          (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist,
          0,
          0,
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        resetCameraRail = false;
      }
    });
    if (resetCameraRail) {
      const targetCameraRailPosition = new Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

    // CALCULATE LERPED SCROLL OFFSET
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction,
    );
    // PROTECT BELOW 0 AND ABOVE 1
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;
    tl.current.seek(lerpedScrollOffset * tl.current.duration());

    const curPoint = curve.getPoint(lerpedScrollOffset);

    // Follow the curve points
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Make the group look ahead on the curve

    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1),
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3(),
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt),
    );

    const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y,
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // LIMIT PLANE ANGLE
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    // SET BACK ANGLE
    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle,
      ),
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
  });

  const airplane = useRef();

  const tl = useRef();
  const backgroundColors = useRef({
    // colorA: "#3535cc",
    // colorB: "#abaadd",
    colorA: "#001524",
    colorB: "#232D3F",
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 1,
      // colorA: "#6f35cc",
      // colorB: "#ffad30",
      colorA: "#2E4374",
      colorB: "#4B527E",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      // colorA: "#424242",
      // colorB: "#ffcc00",
      colorA: "#424242",
      colorB: "#e6c339",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      // colorA: "#81318b",
      // colorB: "#55ab8f",
      colorA: "#252B48",
      colorB: "#445069",
    });

    tl.current.pause();
  }, []);

  return (
    <>
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      {/* <OrbitControls /> */}
      <group ref={cameraGroup}>
        <Background backgroundColors={backgroundColors} />
        <group ref={cameraRail}>
          <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        </group>
        <group ref={airplane}>
          <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
            <TimeMachineModel
              rotation-x={-Math.PI / 0.237}
              scale={[0.02, 0.02, 0.02]}
              position-y={0.1}
            />
          </Float>
        </group>
      </group>
      {/* TEXT */}
      {textSections.map((textSection, index) => (
        <TextSection {...textSection} key={index} />
      ))}

      {/* LINE */}
      <group position-y={-2}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial
            color={"white"}
            opacity={1}
            transparent
            envMapIntensity={2}
            onBeforeCompile={fadeOnBeforeCompile}
          />
        </mesh>
      </group>

      {/* clouds */}
      {clouds.map((cloud, index) => (
        <CloudModel {...cloud} key={index} />
      ))}

      {/* models */}
      {models.map((model, index) => {
        const { component: Model } = model;
        return <Model {...model} key={index} />;
      })}

      {/* Black Hole */}
      <BlackHoleModel
        scale={[50, 50, 50]}
        position={[curvePoints[8].x, curvePoints[8].y - 10, curvePoints[8].z]}
        rotateZ={Math.PI / 2}
        rotateY={Math.PI / 2}
      />
    </>
  );
};
