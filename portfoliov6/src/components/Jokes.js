import React from 'react';
import TenJokes from '/components/TenJokes';
import OneJoke from '/components/OneJoke';

  const Jokes = () =>  {
      return (
        <div>
        <OneJoke />
        <hr/>
        <TenJokes />
        </div>

      )


    }


export default Jokes;
