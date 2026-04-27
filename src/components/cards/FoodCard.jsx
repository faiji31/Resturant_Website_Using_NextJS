import Link from "next/link";

export default function FoodCard({ food }) {
    const { id, title, foodImg, category, price } = food;

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2">

            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={foodImg}
                    alt={title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">

                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {title}
                    </h2>

                    <span className="text-xl font-bold text-orange-500">
                        ${price}
                    </span>
                </div>

                <p className="text-gray-500 mb-5">
                    Delicious fresh food made with premium ingredients.
                </p>

                {/* Buttons */}
                <div className="flex gap-3">

                    <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow-md transition">
                        🛒 Add Cart
                    </button>

                    <Link
                        href={`/foods/${id}`}
                        className="flex-1 text-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-3 rounded-xl font-semibold transition"
                    >
                        View Details
                    </Link>

                </div>

            </div>
        </div>
    );
}