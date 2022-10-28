import "./app.css";
import slack_image from "./slack.png";
import github_image from "./Icon.png";
import profile_image from "./profile-image.png";

function App() {
  return (
    <div className="content">
      <div className="innerContent">
        <div className="image-container">
          <img src={profile_image} alt="" id="profile_img" />
          <h4>Abdulqodir Muritadoh</h4>
        </div>
        <div className="buttons">
          <div className="button">
            <button>Twitter</button>
          </div>
          <div className="button">
            <button>
              <a href="https://training.zuri.team/" id="btn_zuri">
                Zuri Team
              </a>
            </button>
          </div>
          <div className="button">
            <button>
              <a href="http://books.zuri.team" id="books">
                Zuri Books
              </a>
            </button>
          </div>
          <div className="button">
            <button>
              <a
                href="https://books.zuri.team/python-for-beginners?ref_id=abdulqodir"
                id="book__python"
              >
                Makes sense, buy
              </a>
            </button>
          </div>
          <div className="button">
            <button>
              <a href="https://background.zuri.team">Just buy it</a>
            </button>
          </div>
          <div className="button">
            <button>
              <a href="https://books.zuri.team/design-rules" id="book__design">
                Design Books
              </a>
            </button>
          </div>
        </div>
        <div className="social">
          <img src={slack_image} alt="" />
          <img src={github_image} alt="" />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
