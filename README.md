## Prisma funky env loading

`npm i`  
`npx run prisma generate`  (this loads correct schema and .env files)
`ts-node run.ts`  

Expected: Some sort of connection error message due to the DATABASE_URL in root-level .env being invalid.  

Actual output: Prisma tries to load schema and env files from `cake`.

This occurs when doing infrastructure builds and they are placed in directories like this.  

