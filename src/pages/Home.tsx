import "../App.css";
const Home = () => {
  return (
    <div className="welcome-container">
      <div className="pic-text-container">
        {/* <!-- Left section with an image --> */}
        <div className="left-pfp">
          <img src="portrait.jpg" alt="Christian Rudder" />
        </div>
        {/* <!-- Right section with greeting text and paragraph --> */}
        <div className="right-pfp">
          <h2>Hi There 👋</h2>
          <p>
            Paragraphs elit. Donec odio. Quisque volutpat mattis eros. Nullam
            malesuada erat ut turpis. Suspendisse urna nibh viverra non semper
            suscipit posuere a pede. <br />
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in
            sem quis dui placerat ornare. Pellentesque odio nisi euismod in
            pharetra a ultricies in diam. Sed arcu. Cras consequat.
          </p>
        </div>
      </div>
      {/* <!-- Additional descriptive text below the introduction --> */}
      <p className="desc">
        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
        ligula vulputate sem tristique cursus. Nam nulla quam gravida non
        commodo a sodales sit amet nisi.
      </p>
    </div>
  );
};

export default Home;
