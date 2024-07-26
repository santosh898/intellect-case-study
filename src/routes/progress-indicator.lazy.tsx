import { ProgressIndicator } from "@/widgets";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/progress-indicator")({
  component: () => <ProgressIndicator />,
});
