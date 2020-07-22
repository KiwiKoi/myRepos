import React from "react";

export default function withLoadingList(Component) {
  return function withLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;

    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
