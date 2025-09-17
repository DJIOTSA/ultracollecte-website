import { Client } from '@/payload-types'
import { PayloadHandler, PayloadRequest, headersWithCors } from 'payload'
import { z } from 'zod'

const schema = z.object({
  microfinance: z.string().min(1),
  agency: z.string().optional(),
  firstName: z.string(),
  membership: z.string().optional(),
  lastName: z.string(),
  reference: z.string().optional(),
  phone: z.string(),
  photo: z.coerce.number().optional(),
  email: z.string().email().optional(),
  nationalID: z.string().optional(),
  accountNumber: z.string().optional(),
  userCode: z.string().optional(),
  createdAt: z.string().optional(),
  id: z.string().optional(),
})

export const editClient: PayloadHandler = async (req: PayloadRequest) => {
  const data = await req.json?.()
  const validation = schema.safeParse(data)
  if (!validation.success) {
    return Response.json(
      { error: validation.error.flatten() },
      {
        status: 400,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }

  const {
    microfinance,
    membership,
    agency,
    firstName,
    lastName,
    reference,
    phone,
    photo,
    email,
    nationalID,
    accountNumber,
    userCode,
    id,
  } = validation.data

  const microfinanceOBJ = await req.payload.findByID({
    collection: 'microfinances',
    id: microfinance,
  })

  if (!microfinanceOBJ) {
    return Response.json(
      { error: 'Microfinance non trouvée' },
      {
        status: 400,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }
  if (microfinanceOBJ.status !== 'active') {
    return Response.json(
      { error: `Microfinance ${microfinanceOBJ.name} n'est pas active` },
      {
        status: 400,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }
  if (id) {
    const client = await req.payload.findByID({
      collection: 'clients',
      id,
    })
    if (!client) {
      return Response.json(
        { error: 'Client non trouvée' },
        {
          status: 400,
          headers: headersWithCors({
            headers: new Headers(),
            req,
          }),
        },
      )
    }
    if (client.microfinance !== microfinance) {
      return Response.json(
        {
          error:
            'Les informations du client ne correspondent pas aux informations de la microfinance',
        },
        {
          status: 400,
          headers: headersWithCors({
            headers: new Headers(),
            req,
          }),
        },
      )
    }
  }
  //   Check if user exists
  let user: { code?: string | null; id: string } | null | undefined = undefined
  if (userCode) {
    const userQuery = await req.payload.find({
      collection: 'users',
      select: {
        code: true,
        id: true,
      },
      depth: 0,
      limit: 1,
      where: {
        code: {
          equals: userCode,
        },
      },
    })

    if (!userQuery.docs.length) {
      return Response.json(
        { error: 'Le code utilisateur est invalide' },
        {
          status: 400,
          headers: headersWithCors({
            headers: new Headers(),
            req,
          }),
        },
      )
    } else {
      user = userQuery.docs[0]
      if (!user.code) {
        return Response.json(
          { error: 'Le code utilisateur est invalide' },
          {
            status: 400,
            headers: headersWithCors({
              headers: new Headers(),
              req,
            }),
          },
        )
      }
      if (user.code !== userCode) {
        return Response.json(
          { error: 'Le code utilisateur est invalide' },
          {
            status: 400,
            headers: headersWithCors({
              headers: new Headers(),
              req,
            }),
          },
        )
      }
    }
  }

  try {
    let client: Client | null | undefined = undefined
    if (id) {
      client = await req.payload.update({
        collection: 'clients',
        id,
        data: {
          firstName,
          lastName,
          reference,
          phone,
          email,
          nationalID,
          accountNumber,
          microfinance,
          membership,
          agency,
          photo: photo,
          status: 'waiting',
          user: user?.id,
        },
      })
    } else {
      client = await req.payload.create({
        collection: 'clients',
        req,
        data: {
          firstName,
          lastName,
          reference,
          phone,
          email,
          nationalID,
          accountNumber,
          microfinance,
          membership,
          agency,
          photo,
          status: 'waiting',
          user: user?.id,
        },
      })
    }
    return Response.json(
      { success: true, data: client },
      { headers: headersWithCors({ headers: new Headers(), req }) },
    )
  } catch (error: any) {
    return Response.json(
      { error: `${error}` },
      { status: 500, headers: headersWithCors({ headers: new Headers(), req }) },
    )
  }
}
