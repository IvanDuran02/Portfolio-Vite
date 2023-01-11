type Props = {
  theme: string;
  themeToggle: boolean;
};

const Navbar = ({ theme, themeToggle }: Props) => {
  return (
    <nav className="flex">
      <div>
        <h1 className="text-[5vh] font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-red-800 to-zinc-900 animate-gradient-text">
          Ivan's Portfolio
        </h1>
        <div className="w-[16vw] bg-black h-2" />
      </div>
      <button className={`text-[${theme}]`}>Toggle</button>
    </nav>
  );
};

export default Navbar;
