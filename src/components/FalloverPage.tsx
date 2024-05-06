import { RefreshCw } from "lucide-react";
import React from "react";

const FalloverPage = ({
  isLoading,
}: {
  isLoading: boolean;
}) => {
  return (
    <div>
      {isLoading ? (
        <RefreshCw
          size={32}
          className="animated-rotation"
        />
      ) : (
        <p>
          sorry the page you are looking for could not be
          found
        </p>
      )}
    </div>
  );
};

export default FalloverPage;
