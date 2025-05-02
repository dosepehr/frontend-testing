import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='card'>
            <p data-testid='counter-count'>{count}</p>
            <div>
                <button
                    onClick={() => setCount((count) => count + 1)}
                    data-testid='increase-count'
                >
                    increase
                </button>
                <button
                    onClick={() => setCount(0)}
                    style={{
                        margin: '0px 10px',
                    }}
                    data-testid='reset-count'
                >
                    reset
                </button>
                <button
                    data-testid='decrease-count'
                    onClick={() => setCount((count) => count - 1)}
                >
                    decrease
                </button>
            </div>
        </div>
    );
};

export default Counter;

