export default function NewsSkeletonLoader() {
  return (
    <div className="skeleton-container">
      {/* Skeleton Header */}
      <div className="skeleton-header"></div>

      {/* Skeleton News Items */}
      <div className="skeleton-news">
        <div className="skeleton-news-item">
          <div className="skeleton-news-image"></div>
          <div className="skeleton-news-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
        <div className="skeleton-news-item">
          <div className="skeleton-news-image"></div>
          <div className="skeleton-news-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
        <div className="skeleton-news-item">
          <div className="skeleton-news-image"></div>
          <div className="skeleton-news-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
        <div className="skeleton-news-item">
          <div className="skeleton-news-image"></div>
          <div className="skeleton-news-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skeleton-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skeleton-header {
          width: 50%;
          height: 40px;
          margin: 0 auto 30px;
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

        .skeleton-news {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skeleton-news-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .skeleton-news-image {
          width: 30%;
          height: 200px;
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

        .skeleton-news-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skeleton-title,
        .skeleton-text,
        .skeleton-button {
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

        .skeleton-title {
          width: 70%;
          height: 20px;
        }

        .skeleton-text {
          width: 90%;
          height: 15px;
        }

        .skeleton-button {
          width: 30%;
          height: 30px;
          margin-top: 10px;
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
