const React = require('react')
const Def = require('./default')

function Show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
        if (data.place.comments.length) {
          comments = data.place.comments.map(c => {
            return (
              <div className="border" key={data.place.id}>
                <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                <h4>{c.content}</h4>
                <h3>
                  <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
              </div>
            )
          })
        }
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={data.place.pic} alt={`picture of ${data.place.name}`} />
                        <p>Located in {data.place.city}, {data.place.state}</p>
                    </div>
                    <div className="col-6">
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                        <h2>Discription</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            serving {data.place.cuisines}
                        </h4>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                          Edit
                        </a>
                        <form method="post" action={`/places/${data.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <h2>Comments</h2>
                    {comments}
                </div>
            </main>
        </Def>
    )
}

module.exports = Show