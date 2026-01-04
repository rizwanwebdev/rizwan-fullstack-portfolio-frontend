const DisplayError = ({ errorMessage }) => {
  return (
    <>
      <section>
        <div className="container-custom flex  items-center justify-center relative bg-background">
          <div className=" absolute top-1/4 left-1/4 w-70 h-70 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="text-center z-8">
            <p className="mb-4 text-xl text-muted-foreground">{errorMessage}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayError;
