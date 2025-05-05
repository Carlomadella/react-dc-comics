const Main = () => {
  return (
    <main>
            {/* prima sezione */}
            <div className="firstSection">
                <div className="container">
                    <h2>Content goes here</h2>
                </div>
            </div>

            {/* seconda sezione */}
            <div className="secondSection">
                <div className="container">
                    <div className="cards">
                        {/* prima card */}
                        <div className="card">
                            <figure>
                                <img src="../src/assets/img/buy-comics-digital-comics"  />
                            </figure>
                            <h6>DIGITAL COMICS</h6>
                        </div>
                        {/* seconda card */}
                        <div className="card">
                            <figure>
                                <img src="../src/assets/img/buy-comics-digital-comics"  />
                            </figure>
                            <h6>DC MERCHANDISE</h6>
                        </div>
                        {/* terza card */}
                        <div className="card">
                            <figure>
                                <img src="../src/assets/img/buy-comics-digital-comics"  />
                            </figure>
                            <h6>SUBSCRIPTION</h6>
                        </div>
                        {/* quarta card */}
                        <div className="card">
                            <figure>
                                <img src="../src/assets/img/buy-comics-digital-comics"  />
                            </figure>
                            <h6>COMIC SHOP LOCATOR</h6>
                        </div>
                        {/* quinta card */}
                        <div className="card">
                            <figure>
                                <img src="../src/assets/img/buy-comics-digital-comics"  />
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