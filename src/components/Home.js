import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
        <section>
            <div>
                <h1>
                    CREATE NEW TASK
                </h1>
            </div>
            <Link to='/newtask'>
                <button>Create Task</button>
            </Link>
        </section>
    )
    
}

export default Home;