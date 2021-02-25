import React from "react";

export const PostHeaderSection = () => {
  return (
    <section className="PostHeaderSection">
      <style jsx>{`
        .PostHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/blog/header-bg.svg);
          background-repeat: no-repeat;
          background-size: 100% auto;
          background-position: bottom;
          height: 642px;
        }

        // @media screen and (max-width: 1920px) {
        //   .PostHeaderSection {
        //     background-repeat: no-repeat;
        //     background-size: auto 100%;
        //     background-position: top;
        //   }
        // }
      `}</style>
    </section>
  );
};

export default PostHeaderSection;
