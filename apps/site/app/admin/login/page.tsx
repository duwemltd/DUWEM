"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Button,
  Input,
  Stack,
  Typography,
} from "@repo/ui";

import { createClient } from "../../../lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();

  const supabase = createClient();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin() {
    setLoading(true);

    setError("");

    const {
        data,
        error,
        } = await supabase.auth.signInWithPassword({
        email,
        password,
        });

        if (error) {
        setLoading(false);
        setError(error.message);
        return;
        }

        if (!data.user) {
            setLoading(false);

            setError("Unable to sign in.");

            return;
        }
        console.log("Logged in user:", data.user.id);

        const { data: admin, error: adminError } =
            await supabase
                .from("admins")
                .select("id")
                .eq("id", data.user.id)
                .maybeSingle();

            console.log("Admin lookup:", admin);
            console.log("Admin error:", adminError);

        if (!admin) {
        await supabase.auth.signOut();

        setLoading(false);

        setError(
            "You are not authorized to access the administrator portal."
        );

        return;
        }

        router.push("/admin");

    router.push("/admin");
  }

  return (
    <Stack spacing="8">
      <Typography variant="display-sm">
        Administrator Login
      </Typography>

      <Typography variant="body-lg">
        Sign in to manage DUWEM.
      </Typography>

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(event) =>
          setEmail(event.target.value)
        }
        fullWidth
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(event) =>
          setPassword(event.target.value)
        }
        fullWidth
      />

      {error && (
        <Typography variant="body-sm">
          {error}
        </Typography>
      )}

      <Button
        loading={loading}
        onClick={handleLogin}
        fullWidth
      >
        Sign In
      </Button>
    </Stack>
  );
}