import React from 'react'
import Link from "next/link";
import Image from "next/image";
import sun24 from "../icons/sun-24.png";
import moon30 from "../icons/moon-30.png";
import useStore from "../store/store";
export default function Header() {

    const color = useStore((state) => state.color)
    const changeColor = useStore((state) => state.changeColor)


console.log(color);

 
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>


                <ul className="navbar-nav m-auto  flex-row d-flex justify-content-center mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/">
                            <a className='item'>Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className='item'>About</a>
                        </Link>
                    </li>


                </ul>

                <div onClick={changeColor} className='iconBox'>
                    <Image
                        width={30}
                        height={30}
                        objectFit="cover"
                        src={color === 'white' ? moon30 : sun24}
                        alt="image"
                    />
                </div>
            </div>
        </nav>
    )
}
