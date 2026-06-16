"use client";

import Reviews from "@/components/reviews/ReviewsOverview";
import useReviews from "@/hooks/reviews/useReviews";

export default function ReviewsPage() {
  const {
    dashboard,
    reviews,
    loading,
    message,

    status,
    setStatus,

    page,
    setPage,

    pagination, // <-- add

    handleApproveReview,
    handleRejectReview,
    handleFlagReview,
  } = useReviews();

  return (
    <Reviews
      dashboard={dashboard}
      reviews={reviews}
      loading={loading}
      message={message}
      status={status}
      setStatus={setStatus}
      page={page}
      setPage={setPage}
      pagination={pagination} // <-- add
      handleApproveReview={handleApproveReview}
      handleRejectReview={handleRejectReview}
      handleFlagReview={handleFlagReview}
    />
  );
}