import { PrismaClient } from '@prisma/client'

console.log('cake')
const prisma = new PrismaClient()

async function run() {
  await prisma.$connect()
}

run().then().catch(e => {
  console.log(e)
})
