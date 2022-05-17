
export default function Card({content}) {
    return (
    <div className="card" style={{width: '18rem'}}>
        <img src={content.image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{content.title}</h5>
        <p className="card-text">{content.text}</p>
            <a href={content.link} className="btn btn-primary">{content.buttonText}</a>
  </div>
</div>
    )
}