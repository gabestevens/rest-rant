const React = require('react')
const Def = require('./default')

function Show (data) {
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={data.place.pic} alt={`picture of ${data.place.name}`} />
                    </div>
                    <div className="col-6">
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                        <h2>Discription</h2>
                        <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
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
                    <p>blah blah</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show