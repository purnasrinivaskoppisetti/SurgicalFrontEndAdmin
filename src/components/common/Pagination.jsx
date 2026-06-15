"use client";

export default function Pagination({
    loading,
    page,
    setPage,
    pagination,
    totalItems = 0,
}) {
    if (loading || totalItems === 0)
        return null;

    const currentPage =
        pagination?.current_page || 1;

    const totalPages =
        pagination?.total_pages || 1;

    return (
        <div className="mt-1 mb-4">


            {/* Page Info */}
            <div className="text-center mr-2 mt-4">
                <p className="text-xs text-slate-500">
                    Showing page{" "}
                    <span className="font-semibold text-slate-900">
                        {currentPage}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-slate-900">
                        {totalPages}
                    </span>{" "}
                    pages
                </p>
            </div>


            {/* Pagination */}
            <div className="flex justify-center mt-2 mr-4">
                <div className="flex items-center bg-white border border-slate-300 rounded-full overflow-hidden">

                    {/* PREV */}
                    <button
                        disabled={!pagination?.has_previous}
                        onClick={() => setPage(page - 1)}
                        className="h-11 px-4 border-r border-slate-300 text-xs font-bold text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        PREV
                    </button>

                    {/* Pages */}
                    <div className="flex items-center gap-3 px-6">

                        {currentPage > 2 && (
                            <>
                                <button
                                    onClick={() => setPage(1)}
                                    className="text-sm font-medium text-slate-500 hover:text-slate-700"
                                >
                                    1
                                </button>

                                <span className="text-slate-400">
                                    ...
                                </span>
                            </>
                        )}

                        {currentPage - 2 > 0 && (
                            <button
                                onClick={() =>
                                    setPage(
                                        currentPage - 2
                                    )
                                }
                                className="text-sm font-medium text-slate-500 hover:text-slate-700"
                            >
                                {currentPage - 2}
                            </button>
                        )}

                        {currentPage - 1 > 0 && (
                            <button
                                onClick={() =>
                                    setPage(
                                        currentPage - 1
                                    )
                                }
                                className="text-sm font-medium text-slate-500 hover:text-slate-700"
                            >
                                {currentPage - 1}
                            </button>
                        )}

                        {/* Active Page */}
                        <button className="w-9 h-9 rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center">
                            {currentPage}
                        </button>

                        {currentPage + 1 <= totalPages && (
                            <button
                                onClick={() =>
                                    setPage(
                                        currentPage + 1
                                    )
                                }
                                className="text-sm font-medium text-slate-500 hover:text-slate-700"
                            >
                                {currentPage + 1}
                            </button>
                        )}

                        {currentPage + 2 <= totalPages && (
                            <button
                                onClick={() =>
                                    setPage(
                                        currentPage + 2
                                    )
                                }
                                className="text-sm font-medium text-slate-500 hover:text-slate-700"
                            >
                                {currentPage + 2}
                            </button>
                        )}

                        {currentPage + 2 <
                            totalPages && (
                                <>
                                    <span className="text-slate-400">
                                        ...
                                    </span>

                                    <button
                                        onClick={() =>
                                            setPage(
                                                totalPages
                                            )
                                        }
                                        className="text-sm font-medium text-slate-500 hover:text-slate-700"
                                    >
                                        {totalPages}
                                    </button>
                                </>
                            )}
                    </div>

                    {/* NEXT */}
                    <button
                        disabled={!pagination?.has_next}
                        onClick={() => setPage(page + 1)}
                        className="h-11 px-4 border-l border-slate-300 text-xs font-semibold text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        NEXT
                    </button>

                </div>
            </div>
        </div>
    );
}