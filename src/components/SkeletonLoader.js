export default function SkeletonLoader() {
  return (
    <div className="skeleton-container">
      {/* Skeleton for Carousel */}
      <div className="skeleton-carousel"></div>

      {/* Skeleton for Cards */}
      <div className="skeleton-cards">
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
      </div>
      {/* Skeleton for numbers */}
      <div className="skeleton-numbers"></div>

      <style jsx>{`
        .skeleton-container {
          padding: 20px;
        }

        /* Shared styles for skeleton elements */
        .skeleton-carousel,
        .skeleton-card,
        .skeleton-numbers {
          background: linear-gradient(
            90deg,
            #e0e0e0 25%,
            #f5f5f5 50%,
            #e0e0e0 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }

        .skeleton-carousel {
          width: 100%;
          height: 600px;
          margin-bottom: 20px;
        }

        .skeleton-cards {
          display: flex;
          gap: 15px;
        }

        .skeleton-card {
          flex: 1;
          height: 350px;
        }

      .skeleton-numbers {
          width: 100%;
          height: 300px;
          margin-top: 20px;
          background-color: #e0e0e0;
          border-radius: 8px;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
