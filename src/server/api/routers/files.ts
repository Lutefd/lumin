import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { TRPCError } from "@trpc/server";

export const filesRouter = createTRPCRouter({
  getUserFiles: protectedProcedure.query(async ({ ctx }) => {
    const { session } = ctx;
    const { user } = session;

    return await ctx.db.file.findMany({
      orderBy: { createdAt: "desc" },
      where: {
        userId: user.id,
      },
    });
  }),
  deleteFile: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx.session;

      const file = await ctx.db.file.findFirst({
        where: {
          id: input.id,
          userId: user.id,
        },
      });
      if (!file) throw new TRPCError({ code: "NOT_FOUND" });
      await db.file.delete({
        where: {
          id: input.id,
        },
      });
      return `File with id of ${input.id} was deleted`;
    }),
  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSingleFile: protectedProcedure
    .input(z.object({ fileID: z.string().min(1) }))
    .query(({ ctx, input }) => {
      return ctx.db.file.findFirst({
        where: {
          id: input.fileID,
        },
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
