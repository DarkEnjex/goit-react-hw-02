import s from "./Options.module.css";

const Options = ({
  onLeaveFeedback,
  onReset,
  totalFeedback,
}) => {
  return (
    <div className={s.wrapper}>
      <button
        type="button"
        className={s.goodBtn}
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={s.neutralBtn}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={s.badBtn}
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          type="button"
          className={s.resetBtn}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
