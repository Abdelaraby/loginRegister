import Card from "./Card";
const Sale = () => {
  return (
    <>
      <div className="bg-gray-300 ">
        <div className="container mx-auto p-10">
          <h1 className="font-bold my-5 text-2xl">Flash Sale</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
