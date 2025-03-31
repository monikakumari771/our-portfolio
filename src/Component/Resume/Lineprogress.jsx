import { Line } from "rc-progress";

function Lineprogress() {
  return (
    <>
      <div className="coding-sec">
        <h3>Coding Skills</h3>
        <div className="skills">
          <div className="percentage">
            <span>HTML / CSS</span>

            <span>90%</span>
          </div>
          <Line percent={90} strokeWidth={1} strokeColor="#17cf73" />
        </div>
        <div className="skills">
          <div className="percentage">
            <span>JavaScript / Typescript</span>
            <span>80%</span>
          </div>
          <Line percent={80} strokeWidth={1} strokeColor="#17cf73" />
        </div>
        <div className="skills">
          <div className="percentage">
            <span>React.Js / React Native</span>
            <span>80%</span>
          </div>
          <Line percent={80} strokeWidth={1} strokeColor="#17cf73" />
        </div>
        <div className="skills">
          <div className="percentage">
            <span>Php</span>
            <span>75%</span>
          </div>
          <Line percent={75} strokeWidth={1} strokeColor="#17cf73" />
        </div>
      </div>
    </>
  );
}

export default Lineprogress;
