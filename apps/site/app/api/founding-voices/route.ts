import { NextResponse } from "next/server";

import { createFoundingVoice } from "../../../lib/foundingVoices";
import { FoundingVoiceSchema } from "../../../lib/validation/foundingVoice";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = FoundingVoiceSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const record = await createFoundingVoice(result.data);

    return NextResponse.json({
      success: true,
      foundingVoiceId: record.founding_voice_id,
      createdAt: record.created_at,
    });
  } catch (error: unknown) {
    console.error(error);

    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "23505"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This email has already joined the DUWEM Founding Voices program.",
        },
        {
          status: 409,
        }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't submit your application. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}