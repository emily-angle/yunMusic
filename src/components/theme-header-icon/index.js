import React, { memo } from "react";

import { HeaderWrapper } from "./style";

export default memo(function ThemeHeaderIcon(props) {
  const { title, keywords = [] } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div key={item} className="item">
                <span className="name">{item}</span>
                {keywords.length - 1 !== index && (
                  <span className="line">|</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a>更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});
