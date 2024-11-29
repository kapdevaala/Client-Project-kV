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
      <div className=" m-10 w-[100%] flex justify-evenly font-bold md:text-6xl text-3xl sm:font-semibold">
        <p>Reviews</p>
        <span className="flex ">
          <p>{"<-"}</p>
          <p>{"->"}</p>
        </span>
      </div>
      <div className="flex  flex-wrap justify-evenly gap-4">
        {reviews.map((review) => (
          <div className="shadow shadow-[black] bg-[#e8d5f8] rounded-xl max-w-[300px] w-[100%] min-h-[200px]  flex flex-col justify-evenly items-start p-4">
            <p>{review.name}</p>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
