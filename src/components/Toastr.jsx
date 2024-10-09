import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import '../../public/css/react-redux-toastr.min.css';


const ToastrComponent = () => {
  return (
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      closeOnToastrClick
    />
  );
};

export default ToastrComponent;
