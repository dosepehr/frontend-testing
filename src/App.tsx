import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import Counter from './components/counter';
// import Sandbox from './components/sandbox.tsx';
// import ReviewForm from './components/reviewForm/index.tsx';
import Posts from './components/Posts/index.tsx';
export type Review = {
    email: string;
    rating: string;
    text: string;
};

function App() {
    return (
        <>
            <div>
                <a href='https://vite.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            {/* <Counter /> */}
            {/* <Sandbox /> */}
            {/* <Form /> */}
            {/* <ReviewForm /> */}
            <Posts />
        </>
    );
}

export default App;

