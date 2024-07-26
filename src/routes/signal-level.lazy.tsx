import { SignalLevel } from "@/widgets";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/signal-level")({
  component: () => <SignalLevel />,
});
