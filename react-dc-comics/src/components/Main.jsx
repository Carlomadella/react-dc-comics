const Main = () => {
  return (
    <main>
            {/* prima sezione */}
            <div className="top-footer">
                <div className="jumbotron">
                        <img src="../src/assets/img/jumbotron.jpg" alt="jumbotron" />
                    </div>
                <div className="container">
                    <button className="abs-button">CURRENT SERIES</button>
                    <div className="load-more">
                        <button>LOAD MORE</button>
                    </div>
                </div>
            </div>

            {/* seconda sezione */}
            <div className="bot-footer">
                <div className="container">
                    <div className="cards">
                        {/* prima card */}
                        <div className="card">
                            <figure>
                                <img src="../src/assets/img/buy-comics-digital-comics.png"  />
                            </figure>
                            <h6>DIGITAL COMICS</h6>
                        </div>
                        {/* seconda card */}
                        <div className="card">
                            <figure>
                                <img src="../src/assets/img/buy-comics-merchandise.png"  />
                            </figure>
                            <h6>DC MERCHANDISE</h6>
                        </div>
                        {/* terza card */}
                        <div className="card">
                            <figure>
                                <img src="../src/assets/img/buy-comics-subscriptions.png"  />
                            </figure>
                            <h6>SUBSCRIPTION</h6>
                        </div>
                        {/* quarta card */}
                        <div className="card">
                            <figure>
                                <img src="../src/assets/img/buy-comics-shop-locator.png"  />
                            </figure>
                            <h6>COMIC SHOP LOCATOR</h6>
                        </div>
                        {/* quinta card */}
                        <div className="card">
                            <figure>
                                <img src="../src/assets/img/buy-dc-power-visa.svg"  />
                            </figure>
                            <h6>DC POWER VISA</h6>
                        </div>
                    </div>
                </div>
            </div>
    </main>
  );
}

export default Main;