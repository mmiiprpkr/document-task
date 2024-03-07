import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTeam = query({
  args: { email: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const team = await ctx.db.query("teams")
      .filter((q) => 
        q.eq(q.field("createdBy"), args.email))
      .collect();

    return team;
  }
});

export const getTeamById = query({
  args: { _id: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const team = await ctx.db.query("teams")
      .filter((q) => q.eq(q.field("_id"), args._id ))
      .collect();

    return team;
  }
})

export const createTeam = mutation({
  args: { teamName: v.string(), createdBy: v.string() },
  handler: async (ctx, args) => {
    const team = await ctx.db.insert("teams", args)

    return team;
  }
});

export const upDateTeam = mutation({
  args: { _id: v.id("teams"), teamName: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const team = await ctx.db.patch(args._id, { teamName: args.teamName });
    return team;
  }
})

export const deleteTeam = mutation({
  args: { _id: v.id("teams") },
  handler: async (ctx, args) => {
    if (!args._id) {
      throw new Error("Team id missing");
    };

    const team = await ctx.db.delete(args._id)

    return team
  }
})