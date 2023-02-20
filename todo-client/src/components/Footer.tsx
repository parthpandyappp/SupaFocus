export const Footer = () => {
  return (
    <footer className="flex-none text-center text-xs text-white">
      &copy; SUPAFOCUS {`${new Date().getFullYear()}`}
    </footer>
  );
};
