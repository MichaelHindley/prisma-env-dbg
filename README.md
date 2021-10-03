## Prisma funky env loading

`npm i`  
`npx run prisma generate`  (this loads correct schema and .env files)  
`ts-node run.ts`  

Expected: Some sort of connection error message due to the DATABASE_URL in root-level .env being invalid.  

Actual output: Prisma tries to load schema and env files from `cake`.

This occurs when doing infrastructure builds and they are placed in directories like this and happen to come before the root prisma folder in alphaetical order.  

Try renaming `cake` to `xantam_gum` and the output is correct:
```
PrismaClientInitializationError: User `johndoe` was denied access on the database `mydb.public`
    at /Users/hindley/Documents/prisma-env-dbg/node_modules/@prisma/client/runtime/index.js:25090:22 {
  clientVersion: '3.1.1',
  errorCode: 'P1010'
}

```

