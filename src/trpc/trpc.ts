import { TRPCError, initTRPC } from '@trpc/server'
import { PayloadRequest } from 'payload/types'

const t = initTRPC.context().create()

export const router = t.router
export const publicProcedure = t.procedure
export const privateProcedure = t.procedure