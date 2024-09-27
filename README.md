# GYMIX - Server

## Introduction

Welcome to the Gymix fitness accessories shop! This shop allows users to choose GYM accessories, and book it. Everyone can manage products. The backend is built using TypeScript, Express.js, and MongoDB with Mongoose as the ODM.

## Features

- CRUD operations for services and slots
- Products management
- Error handling and input validation

## Technology Stack

- TypeScript
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens) for authentication

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12 or later)
- npm (v6 or later)
- MongoDB (v4 or later)

## Installation

### Step 1: Clone the repository


```bash
git clone https://github.com/Ubaidullah-Hasan/fitness_accessories_server.git
```

## Following steps
* Open the repository in a code editor
* Open terminal or command prompt then write <code>npm install</code>
* create .env file
```bash
PORT=6001
DATABASE_URL="your mongodb atlas database url past here"
NODE_ENV=development
```
<b> Run these command for spacific output </b>
  * <code> npm run start:dev </code> for ts file server running in development mode
  * <code> npm run start:prod </code> for js file server running
  * <code> npm run build </code> for converd ts to js

## Live URL

The Car Wash Booking System is deployed and can be accessed at:
[https://fitness-accessories.vercel.app/](https://fitness-accessories.vercel.app/)