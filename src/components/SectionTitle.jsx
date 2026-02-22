function SectionTitle({ kicker, title, body }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {body ? <p className="section-body">{body}</p> : null}
    </div>
  );
}

export default SectionTitle;
