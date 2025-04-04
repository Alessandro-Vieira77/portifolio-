interface ToolsProps {
  children: React.ReactNode;
}

export function Tools({ children }: ToolsProps) {
  return (
    <div className="flex flex-col items-center gap-1 text-zinc-500">
      {children}
    </div>
  );
}
