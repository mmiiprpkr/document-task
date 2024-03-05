import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createFile = mutation({
  args: {
    fileName: v.optional(v.string()),
    teamId: v.optional(v.string()),
    createdBy: v.optional(v.string()),
    archice: v.optional(v.boolean()),
    whiteboard: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const file = await ctx.db.insert("files", args);

    return file;
  }
});

export const getFiles=query({
  args:{
      teamId:v.string()
  },
  handler:async(ctx, args)=> {
      const result=ctx.db.query('files')
      .filter(q=>q.eq(q.field('teamId'),args.teamId))
      .order('desc')
      .collect();

      return result;
  },
})

export const getFileById = query({
  args: {
    _id: v.id("files")
  },
  handler: async (ctx, args) => {
    const file = ctx.db.get(args._id)

    if (!file) {
      return null
    }
    
    return file;
  }
});

export const upDateFile = mutation({
  args: { _id: v.id("files"), fileName: v.optional(v.string()) , content: v.optional(v.string())},
  handler: async (ctx, args) => {
    const { _id, ...rest } = args;

    const file = await ctx.db.patch(args._id, {
      ...rest
    });
    return file;
  }
})