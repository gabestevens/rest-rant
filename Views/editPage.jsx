const React = require('react')
const Def = require('./default')

function Edit (data) {
    return(
        <Def>
            <main>
                <h1>ADD a New Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" type="text" id="name" name="name" defaultValue={data.place.name} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" value={data.place.pic} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control" id="founded" name="founded" value={data.place.founded} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" name="city" defaultValue={data.place.city}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">state</label>
                        <input className="form-control" type="text" id="state" name="state" defaultValue={data.place.state} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">cuisines</label>
                        <input className="form-control" type="text" id="cuisines" name="cuisines" defaultValue={data.place.cuisines} required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = Edit