import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="p-3 border rounded mb-3">
      <Skeleton height={180} className="mb-2" /> {/* Image placeholder */}
      <Skeleton height={25} width={`60%`} className="mb-2" /> {/* Title */}
      <Skeleton height={15} count={2} /> {/* Description lines */}
    </div>
  );
};

export default SkeletonCard;
