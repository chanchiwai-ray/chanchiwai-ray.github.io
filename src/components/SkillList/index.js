export default function ListItem({ maxCols, skills }) {
  const badgeColor = (level) => {
    const map = {
      expert: "bg-primary",
      proficient: "bg-info",
      intermediate: "bg-warning",
      beginner: "bg-secondary",
    };
    return map[level.toLowerCase()] || "";
  };

  const render = () => {
    let indices = Array.from(
      new Array(Math.ceil(skills.length / maxCols)),
      (x, i) => i * maxCols
    );
    const items = indices.map((idx) => (
      <ul key={idx} className="list-group list-group-horizontal-lg">
        {skills.slice(idx, idx + maxCols).map((item, key) => (
          <li
            key={key}
            className="list-group-item w-100 w-lg-50 text-lg-center text-start"
          >
            {item.title}{" "}
            <span
              className={`badge ${badgeColor(item.level)} ms-3`}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title={item.explaination}
            >
              {item.level}
            </span>
          </li>
        ))}
      </ul>
    ));
    return items;
  };

  return <div className="text-center">{render()}</div>;
}
