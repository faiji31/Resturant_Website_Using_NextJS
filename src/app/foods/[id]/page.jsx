import Link from "next/link";
import React from "react";

export function generateStaticParams() {
   return [{id: "52898"}, {id: "52955"}, {id:"52926"}]
}

const getSingleFood = async (id) => {
    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
        {
            cache: "no-store",
        }
    );

    const data = await res.json();
    return data.details;
};

export const metadata = {
    title: "Food Details",
    description: "Best Fast Food in Town",
};

async function FoodDetails({ params }) {
    const { id } = await params;
    const food = await getSingleFood(id);

    if (!food) {
        return (
            <div className="text-center py-20 text-3xl font-bold">
                Food Not Found
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-orange-50 py-12 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="bg-white rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-2 gap-10">

                    {/* Food Image */}
                    <div className="relative">
                        <img
                            src={food.foodImg}
                            alt={food.title}
                            className="w-full h-full min-h-[550px] object-cover"
                        />

                        <span className="absolute top-6 left-6 bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow-lg">
                            {food.category}
                        </span>
                    </div>


                    {/* Content */}
                    <div className="p-10 flex flex-col justify-center">

                        <p className="text-orange-500 font-semibold mb-2">
                            {food.area} Cuisine
                        </p>

                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            {food.title}
                        </h1>

                        <p className="text-gray-600 leading-8 mb-8">
                            Freshly prepared delicious food made with quality ingredients.
                            Enjoy authentic taste and premium flavor in every bite.
                        </p>


                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-5 mb-8">

                            <div className="bg-orange-100 rounded-2xl p-5">
                                <p className="text-gray-500 mb-1">
                                    Category
                                </p>

                                <h3 className="font-bold text-lg">
                                    {food.category}
                                </h3>
                            </div>

                            <div className="bg-orange-100 rounded-2xl p-5">
                                <p className="text-gray-500 mb-1">
                                    Price
                                </p>

                                <h3 className="font-bold text-green-600 text-lg">
                                    ${food.price}
                                </h3>
                            </div>

                        </div>


                        {/* Buttons */}
                        <div className="flex gap-4">

                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-md">
                                🛒 Add To Cart
                            </button>

                            <Link
                                href={food.video}
                                target="_blank"
                                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                ▶ Watch Recipe
                            </Link>

                        </div>


                        {/* Back Button */}
                        <Link
                            href="/foods"
                            className="mt-8 inline-block text-orange-500 font-semibold"
                        >
                            ← Back to Foods
                        </Link>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default FoodDetails;