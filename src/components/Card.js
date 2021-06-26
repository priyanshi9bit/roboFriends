import React from 'react';


const Card = (props) =>{
    const {name, email, id } = props;
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
                            {/* background  border padding margin  animation */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                {/* <h2>Jane Doe</h2>
                <p>janedoe@gmail.com</p> */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;