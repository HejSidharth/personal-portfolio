import { useRobotMode } from "@/context/RobotModeContext";

export default function Footer() {
  const { toggleRobotMode } = useRobotMode();

  return (
    <footer className="mt-auto py-8 text-center">
      <button
        onClick={toggleRobotMode}
        className="text-[10px] text-muted-foreground/30 hover:text-muted-foreground transition-colors"
      >
        Click this if you are a bot
      </button>
    </footer>
  );
}
