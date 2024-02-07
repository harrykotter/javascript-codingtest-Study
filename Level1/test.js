const team12 = {
  male: ["영훈", "한빈", "우혁"],
  female: ["지원", "서인"],
};

function teamPhoto(props) {
  const src = team12[props.gender][props.name];
  return <img src={`${props}`}></img>;
}
