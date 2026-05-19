# Typescript Setup:
=====================

1. Download and Install Node.js latest version (>=20)
   node -v
   npm -v

2. Download and Install VS Code

3. Setup the Typescript project in VS Code

   i. Create a project folder and open in vs code

   ii. Initialize the npm --> npm init -y (package.json file will be created)

   iii. Install the typescript at project level

   npm install typescript --save-dev

   verify the typescript --> npx tsc -v

   iv. Create tsconfig.json file --> npx tsc --init

Execution:
===========
1. Compile and Run the typescript file
To compile typescript code --> npx tsc
To run the .js file afte compilation --> node .\dist\1basics\1variables.js

2. Run the typescript directly
To install ts-node --> npm install -g ts-node
To run the .ts file --> ts-node .\src\1basics\1variables.ts
