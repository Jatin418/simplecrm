import React from 'react';
import {useRoutes} from "react-router-dom"
import Account from './Account/Account';
import AccRegister from './Account/AccRegister';
import Dashboard from './Dashboard/Dashboard';
import Frontlayouts from './Layouts/FrontLayout';


function Routes(){
  function handleClick(event) {
      event.preventDefault();
      console.info('You clicked a breadcrumb.');
    }

 return useRoutes(
  [
      {
        path:"",
        element:<Frontlayouts/>,
        children:
        [
          {
            paath:"",
            element:<Dashboard/>
          },
          {
            path:"Account",
            element:<Account/>
          },
          {
            path:"Accreg",
            element:<AccRegister/>
          },
          

        ]
      }  
  ]
 )
  }
  export default Routes;
