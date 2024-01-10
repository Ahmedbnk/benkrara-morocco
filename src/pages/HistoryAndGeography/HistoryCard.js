const HistoryCard = function (params) {
  return (
    <div className="history-card-container ">
      <div className="history-card">
        <div className="history-text">
          <h4 className="pb-1">{params.title}</h4>
          <small>{params.period}</small>
        </div>
      </div>
      <span className="vertical-line"></span>
      <span className="vertical-line-top"></span>
    </div>
  );
};
export default HistoryCard;
