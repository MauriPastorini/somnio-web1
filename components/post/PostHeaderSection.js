import React from "react";

export const PostHeaderSection = () => {
  return (
    <section className="PostHeaderSection">
      <style jsx>{`
        .PostHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/post/header-bg.svg);
          background-repeat: no-repeat;
          background-size: 100% auto;
          background-position: top;
          height: 642px;
        }
      `}</style>
    </section>
  );
};

export default PostHeaderSection;
