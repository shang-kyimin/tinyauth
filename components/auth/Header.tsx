interface HeaderProps {
  label: string;
};

export const Header = ({
  label,
}: HeaderProps) => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-y-2">
      <h1 className="text-2xl tracking-wide font-semibold">TinyAuth</h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};
