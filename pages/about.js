import useStore from "../store/store";

import Header from "../Components/Header";

export default function Home() {

     const color = useStore((state) => state.color)
    //  text-white


    console.log(color,' color ');
    return (
        <div style={{ backgroundColor: color, height: '100vh' }}>
            <Header />
            <div  className={color === 'white' ? ' container text-dark' : 'text-white container '} >
                <h1 className="lh-1 mt-5 white">What is Lorem Ipsum?</h1>
                <p className="fw-normal white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
        </div>
    )
}
