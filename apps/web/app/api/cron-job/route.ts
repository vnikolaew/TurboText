import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge"; // Optional: Use edge runtime for faster cold starts

export async function POST(req: NextRequest) {
   try {
      // Verify the request is from Vercel Cron (optional but recommended)
      const authHeader = req.headers.get("authorization");
      if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
         return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      // Perform your background job here
      await performBackgroundJob();

      // Send a success response
      return NextResponse.json({
         success: true,
         message: "Cron job completed successfully",
      });
   } catch (error) {
      console.error("Cron job failed:", error);
      return NextResponse.json(
         { error: "Internal Server Error" },
         { status: 500 }
      );
   }
}

async function performBackgroundJob() {
   // Implement your background job logic here
   console.log(`Performing background job at ${new Date().toISOString()}...`);
   // Add your actual job logic here
}
