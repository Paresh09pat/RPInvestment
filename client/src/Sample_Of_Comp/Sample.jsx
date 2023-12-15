import React from 'react'

function Sample() {
    return (
        <>
            {/* css for all these components are provided in index.css don't change anything in it only add the given components or classname only */}

            {/* arrow btn  use same className names*/}
            {/* NOTE : if you want simple btn without arrow so create one simple btn and give classname "form-button" only*/}

            <button className='form-button button-fancy -black' >
                <span className="arrow"></span>
                <span className="text">Sign Up</span>
            </button>

            {/* for outer (at time of registration popup) popup btn use classname "pop_button_out" */}
            {/* for inner (after registration popup) popup btn use classname "pop-button" */}



            {/* black color animated wrap btn use same classnames , instead navlink you can use anything as per your need*/}
            <div className='linkWrap'>
                <NavLink className='nnlink' to='/Login'>
                    Login
                </NavLink>
            </div>

            {/* for placeholder animation add below both classname to our input field  */}
            input-text newani

            {/* tool tip  */}
            import {Icon} from '@iconify/react';
            import infoIcon from '@iconify-icons/bi/info';

            <p className="circle-icon" >
                <Icon icon={infoIcon} style={{ color: 'black' }} width="40" height="40" />
            </p>

            {/* .circle-icon {
                width: 39px;
            height: 39px;
            background-color: white;
            border:1px solid black;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            color: white;
            font-weight:900;
            position:absolute;
            right: 30%;
    }
            .circle-icon:hover {
                animation: pulse1 2s infinite;
    }
            @keyframes pulse1 {
                0 % {
                    box- shadow: 0 0 0 0 rgb(0 0 0 / 40%);
    }
            70% {
                box - shadow: 0 0 0 15px rgba(198, 8, 119, 0);
    }
            100% {
                box - shadow: 0 0 0 0 rgba(181, 24, 71, 0);
    }
    } */}


            {/* switch btn */}

            <label className="switch">
                <input type="checkbox" name="remember" id="" className="checked-inp" />
                <span className="slider"></span>
            </label>

            
        </>
    )
}

export default Sample