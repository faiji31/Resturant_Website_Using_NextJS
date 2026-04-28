export default function Loading() {
    return (
        <div className="max-w-6xl mx-auto py-16 animate-pulse">
            <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gray-300 min-h-[550px]" />
                <div className="p-10 space-y-6">
                    <div className="h-6 w-40 bg-gray-300 rounded"></div>
                    <div className="h-12 w-72 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="h-24 bg-gray-300 rounded-2xl"></div>
                        <div className="h-24 bg-gray-300 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}