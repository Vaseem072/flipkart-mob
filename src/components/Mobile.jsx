import "../css/Mobile.css";
const Mobile = () => {

    return (
        <>
            <h1>Flipkart mobile component</h1>
            <div className="container">
                <div id="child1"><img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/x/8/-original-imah8gber9wv5ny8.jpeg?q=70" alt="" width="200" /></div>
                <div id="child2">
                    <h2>SAMSUNG Galaxy S24 FE 5G (Graphite, 256 GB)</h2>
                    <button id="ratings-btn">4.5★</button>
                    <span> 906 Ratings & 74 Reviews</span>
                    <ul>
                        <li> 8 GB RAM | 128 GB ROM</li>
                        <li>17.02 cm (6.7 inch) Full HD+ Display</li>
                        <li>50MP + 12MP | 10MP Front Camera</li>
                        <li>4700 mAh Battery</li>
                        <li>Exynos 2400e Processor</li>

                    </ul>
                </div>
                <div id="child3">
                    <h3>₹50,999</h3>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="" width="70" />
                    <p id="ac-price">80999</p>
                    <span>25% off</span>
                    <p>Free delivery by 25th mar</p>
                </div>
            </div >
        </>
    );
}

export default Mobile;