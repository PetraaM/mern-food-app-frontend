const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-ultra tracking-tight">
          nom-nom eats.com
        </span>
        <span className="text-white font-ultra tracking-tight flex gap-4">
          <span>Privacy policy</span>
          <span>Terms of service</span>
        </span>
      </div>
    </div>
  );
};
export default Footer;
