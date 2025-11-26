const PageHeader = ({ image, title, desc }) => {
  return (
    <div
      className="min-h-[60vh] bg-center bg-cover flex items-center justify-start text-white"
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="text-4xl lg:text-5xl font-fraunces font-semibold">
          {title}
        </h1>
        <p className="max-w-xl mt-4 text-lg text-[#FFFFFFBC]">{desc}</p>
      </div>
    </div>
  );
};

export default PageHeader;
