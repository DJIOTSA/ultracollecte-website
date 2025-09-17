import { OperationSession } from "@/payload-types"
import { endOfDay, startOfDay } from "date-fns"
import { headersWithCors, Payload, PayloadRequest } from "payload"

interface IProps {
    microfinance: string
    agency?: string
    date: string
}
export const checkOperationSession = async (payload:Payload ,{microfinance, agency, date}: IProps) => {
    const startDate = startOfDay(new Date(date))
        const endDate = endOfDay(new Date(date))
    
        // Build the base query with microfinance and date range
        const baseQuery = {
          microfinance: { equals: microfinance },
          createdAt: {
            greater_than_equal: startDate.toISOString(),
            less_than_equal: endDate.toISOString(),
          },
        }
    
        // Build all possible query conditions
        const conditions = [
          // Microfinance only
          { ...baseQuery, agency: { equals: 'null' } },
    
          // Microfinance + Agency (if agencyId is provided)
          ...(agency ? [{ ...baseQuery, agency: { equals: agency } }] : []),
        ]
    
        const microfinanceSessionQuery = await payload.find({
          collection: 'operation-sessions',
          where: conditions[0],
          depth: 0,
          limit: 1,
        })
        const agencySessionQuery = await payload.find({
          collection: 'operation-sessions',
          where: conditions[1],
          depth: 0,
          limit: 1,
        })
    
        if (microfinanceSessionQuery.totalDocs === 0 && agencySessionQuery.totalDocs === 0) {
          return undefined
        }
    
        const microfinanceSession = microfinanceSessionQuery.docs.find(
          (session) => !!session.microfinance && !session.agency,
        ) as OperationSession | undefined
    
        const agencySession = agencySessionQuery.docs.find(
          (session) => !!session.microfinance && !!session.agency,
        ) as OperationSession | undefined
    
        // get relevant session
        const relevantSession = agencySession || microfinanceSession
        
       return   relevantSession
      
}


const createOperationSessionResponse = (
  message: string,
  state: 'open' | 'closed' | 'not_found' | 'error',
  status = 404,
  req: PayloadRequest,
  data?: OperationSession | undefined,
) => {
  return Response.json(
    { message, status, state, data },
    {
      status,
      statusText: message,
      headers: headersWithCors({
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        req,
      }),
    },
  )
}