# VR-AFrame-Explorer

This application was developed during the 2023 edition of the INESC TEC CTM Summer Internship.

The project proposal is called "Exploring Places in VR", and focused on both exploring the generation of photo-realistic 3D models based on real places, and on the development of a platform to explore these models on.

## Models

For the model generation, we either used Photogrammetry or LIDAR software.

LIDAR models were created using the Scaniverse app, on a LIDAR equipped 3rd generation iPad Pro.

Photogrammetry models were created by capturing a huge amount of images, and feeding them into Meshroom, a free and open-source 3D reconstructor software based on the AliceVision Photogrammetric CV framework.

## Explorer

The explorer application was built using A-Frame, a web framework for building virtual reality (VR) experiences. A-Frame is a declarative, ECS-based framework, built on top of Three.js. UI elements were created by porting the existing Three-Mesh-UI library, and adapting it into the A-Frame ecosystem.

Sadly, controls are not optimized for anything other than keyboard and mouse, as we were unable to get our hands on more sophisticated equipment. Additionally, the heavier models are not optimized well enough for running on lower-end hardware.

Furthermore, as a complement, simple routing and file serving was achieved by creating a simple web server with Express.js, so as to make it easier to switch between models.

## Running the application

You can run the application by installing the dependencies (`npm install`), and starting the development server, with the command `npm run dev`.

Alternatively, we also provide a Dockerfile for building a Docker image.

### Prototype

We also have a prototype of the application up and running [here](https://vr-aframe-explorer.fly.dev)
