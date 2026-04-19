# TS-ML-Engine: Neural Sentiment Analysis in TypeScript

## Overview
This repository demonstrates the implementation of a Neural Network (LSTM) using **Brain.js** and **TypeScript**. The goal is to classify financial sentiment in short text sequences directly within a Node.js environment.

## Why TypeScript for ML?
Using TypeScript ensures **type safety** across the data pipeline, reducing runtime errors during tensor transformations or data preprocessing. This project showcases:
- Implementation of Recurrent Neural Networks (RNN) in JS/TS.
- Strict interface definitions for training datasets.
- Clean, modular code structure for AI integration.

## Setup
```bash
npm install
npx tsc # Compile TypeScript
node dist/classifier.js # Run the model
