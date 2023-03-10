import './main.css'
import { useState } from 'react'

export function MainHome () {

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false)
    }, 1500);

    return (
        <main>

        {loading ?  <ul className="loading">
                              <li className="loadingList"></li>
                              <li className="loadingList"></li>
                              <li className="loadingList"></li>
                              <li className="loadingList"></li>
                              <li className="loadingList"></li>
                            </ul>:

        <div className="mainHome">
            <img className='imgMain' src='https://images.pexels.com/photos/8346051/pexels-photo-8346051.jpeg?cs=srgb&dl=pexels-ron-lach-8346051.jpg&fm=jpg' alt='gente con ropa'/>

            <p className='textMain'>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
                THE BEST <br/>
            </p>

            <img className='imgMain' src='https://images.pexels.com/photos/7764014/pexels-photo-7764014.jpeg?cs=srgb&dl=pexels-cottonbro-7764014.jpg&fm=jpg' alt='gente con ropa'/>

            <p className='textMain'>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING <br/>
                CLOTHING
            </p>

            <img className='imgMain' src='https://images.pexels.com/photos/8722189/pexels-photo-8722189.jpeg?cs=srgb&dl=pexels-darina-belonogova-8722189.jpg&fm=jpg' alt='gente con ropa'/>

        </div>}

        </main>
    );
}