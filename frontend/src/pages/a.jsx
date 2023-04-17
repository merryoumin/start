const A = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex flex-col justify-center items-center">
      <img
        className="border-8 border-white shadow-lg shadow-white w-96"
        src={`${process.env.PUBLIC_URL}/images/푸들.jpeg`}
      />
      A page
    </div>
  );
};

export default A;
