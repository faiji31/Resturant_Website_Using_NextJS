export default function FoodSkeleton() {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-md animate-pulse">

            {/* Image Skeleton */}
            <div className="w-full h-64 bg-gray-300"></div>

            <div className="p-6">

                {/* Title + Price */}
                <div className="flex justify-between mb-4">
                    <div className="h-6 w-40 bg-gray-300 rounded"></div>
                    <div className="h-6 w-16 bg-gray-300 rounded"></div>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-6">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <div className="h-12 flex-1 bg-gray-300 rounded-xl"></div>
                    <div className="h-12 flex-1 bg-gray-300 rounded-xl"></div>
                </div>

            </div>
        </div>
    );
}