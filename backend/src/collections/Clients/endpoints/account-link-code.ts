import { getRedisClient } from '@/plugins/redis-plugin'
import { PayloadHandler, PayloadRequest, headersWithCors } from 'payload'

// export const getAccountLinkCode: PayloadHandler = async (req: PayloadRequest) => {
// const clientref = req.searchParams.get('client')
// if (!clientref) {
//   return Response.json(
//     { error: 'Unprocessable entity' },
//     {
//       status: 422,
//       headers: headersWithCors({
//         headers: new Headers(),
//         req,
//       }),
//     },
//   )
// }
// const client = (
//   await req.payload.find({
//     collection: 'clients',
//     where: {
//       reference: { equals: clientref },
//     },
//     limit: 1,
//     depth: 0,
//   })
// )?.docs?.[0]
// if (!client) {
//   return Response.json(
//     { error: 'Client not found' },
//     {
//       status: 404,
//       headers: headersWithCors({
//         headers: new Headers(),
//         req,
//       }),
//     },
//   )
// }
//
// const redisClient = getRedisClient({})
// let code = await redisClient.get(`account-link-code:${client.id}`)
// if (!code) {
//   code = Math.floor(Math.random() * 1000000).toString()
//   await redisClient.set(`account-link-code:${client.id}`, code, 'EX', 60 * 5)
// }
//
// return Response.json(
//   { code },
//   {
//     status: 200,
//     headers: headersWithCors({
//       headers: new Headers(),
//       req,
//     }),
//   },
// )
// }
