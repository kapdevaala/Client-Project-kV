import React from "react";
const reviews = [
  {
    _id: 1,
    name: "jack",
    description:
      "The Product Delivery is very fast and also the cloth quality is also best as i used to buy the products from here many times ",
  },
  {
    _id: 1,
    name: "jack",
    description:
      "The Product Delivery is very fast and also the cloth quality is also best as i used to buy the products from here many times ",
  },
  {
    _id: 1,
    name: "jack",
    description:
      "The Product Delivery is very fast and also the cloth quality is also best as i used to buy the products from here many times ",
  },
  {
    _id: 1,
    name: "jack",
    description:
      "The Product Delivery is very fast and also the cloth quality is also best as i used to buy the products from here many times ",
  },
];

export const CustomerReview = () => {
  return (
    <div className="  w-[100%] flex flex-col justify-center items-center">
      <div className=" m-10 w-[100%] flex justify-evenly font-bold md:text-6xl sm:text-3xl  text-2xl sm:font-semibold">
        <p className="text-center">Our Happy Customers</p>
        <span className="flex ">
          <p>{"<"}</p>
          <p>{">"}</p>
        </span>
      </div>
      <div className="flex  flex-wrap justify-evenly gap-4">
        {reviews.map((review) => (
          <div className="shadow shadow-[black] bg-[white] rounded-xl max-w-[300px] w-[100%] min-h-[200px]  flex flex-col justify-evenly items-start p-4">
            <p>{review.name}</p>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
