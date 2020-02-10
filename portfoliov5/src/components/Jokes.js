import React from 'react';
import TenJokes from '/components/TenJokes';
import OneJoke from '/components/OneJoke';
import Header from '/components/Header';
  const Jokes = () =>  {


      return (
        <div>
          <Header />
        <OneJoke />
        <hr/>
        <TenJokes />
        </div>

      )


    }


export default Jokes;
