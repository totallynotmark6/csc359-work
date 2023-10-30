import React from 'react';
// The hotel invites guests to select toast, an English muffin, a bagel, or a croissant.
// The hotel invites guests to select eggs that are scrambled, sunny side up, over easy, or boiled.
// The hotel invites guests to select orange, grapefruit, grape, or apple juice.

export default function BreakfastPage() {
    const [bread, setBread] = React.useState('');
    const [eggs, setEggs] = React.useState('');
    const [juice, setJuice] = React.useState('');

    return (
        <div>
            <h1>Breakfast</h1>
            {/* select toast, an english muffin, a bagel, or a croissant */}
            <h2>What kind of bread would you like?</h2>
            <input type="radio" name="bread" value="toast" onChange={e => setBread(e.target.value)} />
            <label htmlFor="toast">Toast</label><br />
            <input type="radio" name="bread" value="english muffin" onChange={e => setBread(e.target.value)} />
            <label htmlFor="english muffin">English Muffin</label><br />
            <input type="radio" name="bread" value="bagel" onChange={e => setBread(e.target.value)} />
            <label htmlFor="bagel">Bagel</label><br />
            <input type="radio" name="bread" value="croissant" onChange={e => setBread(e.target.value)} />
            <label htmlFor="croissant">Croissant</label><br />

            {/* select eggs that are scrambled, sunny side up, over easy, or boiled */}
            <h2>What kind of eggs would you like?</h2>
            <input type="radio" name="eggs" value="scrambled" onChange={e => setEggs(e.target.value)} />
            <label htmlFor="scrambled">Scrambled</label><br />
            <input type="radio" name="eggs" value="sunny side up" onChange={e => setEggs(e.target.value)} />
            <label htmlFor="sunny side up">Sunny Side Up</label><br />
            <input type="radio" name="eggs" value="over easy" onChange={e => setEggs(e.target.value)} />
            <label htmlFor="over easy">Over Easy</label><br />
            <input type="radio" name="eggs" value="boiled" onChange={e => setEggs(e.target.value)} />
            <label htmlFor="boiled">Boiled</label><br />

            {/* select orange, grapefruit, grape, or apple juice */}
            <h2>What kind of juice would you like?</h2>
            <input type="radio" name="juice" value="orange" onChange={e => setJuice(e.target.value)} />
            <label htmlFor="orange">Orange</label><br />
            <input type="radio" name="juice" value="grapefruit" onChange={e => setJuice(e.target.value)} />
            <label htmlFor="grapefruit">Grapefruit</label><br />
            <input type="radio" name="juice" value="grape" onChange={e => setJuice(e.target.value)} />
            <label htmlFor="grape">Grape</label><br />
            <input type="radio" name="juice" value="apple" onChange={e => setJuice(e.target.value)} />
            <label htmlFor="apple">Apple</label><br />

            <h2>Results</h2>
            <p>Bread: {bread}</p>
            <p>Eggs: {eggs}</p>
            <p>Juice: {juice}</p>
        </div>
    )
}