import { NextResponse } from "next/server";

import {
  approveFoundingVoice,
  updateFoundingVoiceStatus,
} from "../../../../../lib/admin/foundingVoices";
import { requireAdmin } from "../../../../../lib/admin/requireAdmin";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function PATCH(
  request: Request,
  { params }: Props
) {
  try {
    await requireAdmin();
    const { id } = await params;

    const body = await request.json();

    let data;

    if (body.status === "approved") {
      data = await approveFoundingVoice(id);
    } else {
      data = await updateFoundingVoiceStatus(
        id,
        "rejected"
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}