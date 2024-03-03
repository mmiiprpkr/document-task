"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";

interface ConvexClientProviderProps {
  children: React.ReactNode
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string)

const ConvexClientProvider = ({children}: ConvexClientProviderProps) => {
  return ( 
    <ConvexProvider
      client={convex}
    >
      {children}
    </ConvexProvider>
   );
}
 
export default ConvexClientProvider;