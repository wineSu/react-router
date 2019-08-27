import React from 'react';

function Detail(props) {
  return (
    <div>
      详情 :id{props.match.params.id}
    </div>
  );
}

export default Detail;
