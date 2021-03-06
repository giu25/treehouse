function App() {
    return (
        <div className="application">
            <div className="header">
                <h1>Scoreboard</h1>
            </div>

            <div className="players">
                <div className="player">
                    <div className="player-name">
                        Giuseppe
                    </div>
                    <div className="player-score">
                        <div className="counter">
                            <button className="counter-action-decrement"> - </button>
                            <div className="counter-score"> 31 </div>
                            <button className="counter-action-increment"> + </button>
                        </div>
                    </div>
                </div>
                <div className="player">
                    <div className="player-name">
                        Junior
                    </div>
                    <div className="player-score">
                        <div className="counter">
                            <button className="counter-action-decrement"> - </button>
                            <div className="counter-score"> 29 </div>
                            <button className="counter-action-increment"> + </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
ReactDOM.render(<App />,document.getElementById('container'));