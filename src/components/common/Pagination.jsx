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

    return (
        <div className="flex items-center justify-between mt-6 bg-white border rounded-xl px-4 py-3">
            <div className="text-sm text-slate-500">
                Showing page{" "}
                <span className="font-semibold text-slate-900">
                    {pagination?.current_page || 1}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-900">
                    {pagination?.total_pages || 1}
                </span>
            </div>

            <div className="flex items-center gap-2">
                <button
                    disabled={
                        !pagination?.has_previous
                    }
                    onClick={() =>
                        setPage(page - 1)
                    }
                    className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
                >
                    Previous
                </button>

                <button
                    disabled={
                        !pagination?.has_next
                    }
                    onClick={() =>
                        setPage(page + 1)
                    }
                    className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}