export default function ReviewCard({ review }) {
    const {
        user,
        photo,
        rating,
        review: comment,
        likes,
        date
    } = review;

    return (
        <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-6">

            {/* User */}
            <div className="flex items-center gap-4 mb-5">
                <img
                    src={photo}
                    alt={user}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                />

                <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">
                        {user}
                    </h3>

                    <p className="text-sm text-gray-500">
                        {new Date(date).toLocaleDateString()}
                    </p>
                </div>

                {/* Rating */}
                <div className="bg-orange-100 px-3 py-2 rounded-xl font-semibold text-orange-500">
                    ⭐ {rating}.0
                </div>
            </div>


            {/* Review */}
            <p className="text-gray-600 leading-7 mb-6">
                {comment}
            </p>


            {/* Footer */}
            <div className="flex justify-between items-center border-t pt-4">

                <span className="text-gray-500 font-medium">
                    👍 {likes.length} Likes
                </span>

                <button className="text-orange-500 font-semibold hover:underline">
                    Helpful
                </button>

            </div>

        </div>
    );
}