'use client'

import { useEffect } from 'react'
import styles from 'styles/App.module.scss'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  BufferGeometry,
  MeshBasicMaterial,
  BufferAttribute,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  DoubleSide,
  PointLight,
  Color,
} from 'three'
import EQfrontroom from 'public/EQfrontroom.jpg'
import Image from 'next/image'

export default function Index() {
  useEffect(() => {
    const scene = new Scene()
    const fov = 35
    const aspect = 2 // the canvas default
    const near = 0.1
    const far = 100
    const camera = new PerspectiveCamera(fov, aspect, near, far)

    const renderer = new WebGLRenderer()

    renderer.setClearColor(0x000000, 0)
    renderer.setSize(window.innerWidth, window.innerHeight)

    // A crystal shaped object
    // define the vertices of the crystal shape
    const vertices = new Float32Array([
      // top pyramid
      0,
      1,
      0, // vertex 0
      -0.5,
      0,
      0.5, // vertex 1
      0.5,
      0,
      0.5, // vertex 2
      0.5,
      0,
      -0.5, // vertex 3
      -0.5,
      0,
      -0.5, // vertex 4
      // bottom pyramid
      0,
      -1,
      0, // vertex 5
      -0.5,
      0,
      0.5, // vertex 6
      0.5,
      0,
      0.5, // vertex 7
      0.5,
      0,
      -0.5, // vertex 8
      -0.5,
      0,
      -0.5, // vertex 9
    ])

    // define the indices of the triangles that make up the crystal shape
    const indices = new Uint16Array([
      // top pyramid
      0,
      1,
      2, // triangle 0
      0,
      2,
      3, // triangle 1
      0,
      3,
      4, // triangle 2
      0,
      4,
      1, // triangle 3
      // bottom pyramid
      5,
      6,
      7, // triangle 4
      5,
      7,
      8, // triangle 5
      5,
      8,
      9, // triangle 6
      5,
      9,
      6, // triangle 7
    ])

    // create a BufferGeometry object
    const geometry = new BufferGeometry()

    // set the vertices and indices for the geometry
    geometry.setAttribute('position', new BufferAttribute(vertices, 3))
    geometry.setIndex(new BufferAttribute(indices, 1))

    // optionally, compute the normals for the geometry
    geometry.computeVertexNormals()

    // reflective crystal material
    const material = new MeshPhongMaterial({
      color: 0xffffff,
      specular: 0xffffff,
      shininess: 50,
      side: DoubleSide,
    })

    const mesh = new Mesh(geometry, material)

    mesh.position.set(0, 2, 0)
    mesh.scale.set(1.6, 2, 1)

    const pointLight1 = new PointLight(0xff9f00, 1, 100) // orange
    const pointLight2 = new PointLight(0x00bfef, 1, 100) // teal
    const pointLight3 = new PointLight(0x00375f, 1, 100) // blue
    const pointLight4 = new PointLight(0xffc800, 1, 100) // yellow
    const pointLight5 = new PointLight(0xffffff, 1, 10) // white

    pointLight1.position.set(1, 1, 3)
    pointLight2.position.set(3, 6, 1)
    pointLight3.position.set(-4, 0, -4)
    pointLight4.position.set(1, 10, -10)
    pointLight5.position.set(1, -10, -4)

    scene.add(pointLight1)
    scene.add(pointLight2)
    scene.add(pointLight3)
    scene.add(pointLight4)
    scene.add(pointLight5)

    scene.add(mesh)

    camera.position.z = 10
    camera.position.y = 3

    renderer.setSize(200, 200)

    const render = () => {
      requestAnimationFrame(render)
      renderer.render(scene, camera)
    }

    const canvas = document.getElementById('scene-container') as HTMLCanvasElement
    canvas.appendChild(renderer.domElement)

    render()

    const animation = () => {
      mesh.rotation.y += 0.01
    }

    const animate = () => {
      requestAnimationFrame(animate)
      animation()
    }

    animate()

    return () => {
      canvas.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>
        Gifts for the body, mind & spirit. Tools for healing, self-discovery &
        empowerment
      </h1>
      <div className={styles.breakPoint}>
        <div className={styles.line} />
      </div>
      <div id="scene-container" className={styles.scene} />
      <div className={styles.missionStatement}>
        <h2 className={styles.missionHeader}>Our Mission</h2>
        <p className={styles.missionText}>
          To support and empower individual wellness through products, services,
          education and resources. Inner Equinox is dedicated to expanding your
          options for growth and healing, encouraging new experiences that motivate
          you toward optimum health, and inspire you to take action and
          responsibility for your overall wellness. Individual wellness leads to
          wellness in relationships, families and communities, which ultimately
          promotes wellness of our planet. Optimum health and well-being is about the
          whole person: physically, mentally, emotionally, spiritually, socially and
          environmentally. Wellness is an active, lifelong process of learning,
          healing and growing. We believe health and healing is more than just the
          absence of illness - ones thoughts, emotions and beliefs make a difference
          in ones life experience. Everyone is capable of making positive changes in
          their life as they so desire. Inner Equinox helps you in your journey
          toward optimal health and well-being. Stop in and talk w/us about the many
          paths available to give yourself the best life journey possible! Each and
          every person on this planet has a role to play and something they can do to
          make the world a better place.
        </p>
      </div>
      <Image
        src={EQfrontroom}
        alt="Inner Equinox Front Room"
        width={306}
        height={408}
        className={styles.frontRoomImage}
      />
    </div>
  )
}
