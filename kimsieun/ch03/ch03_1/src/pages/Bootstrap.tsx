export default function Bootstrap() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPasswordI" className="form-label">
          Password{' '}
        </label>
        <input type="password" className="form-control" id="exampleInput assword1" />
      </div>{' '}
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck]" />
        <label className="form-check-label" htmlFor="exampleCheckI">
          Check me out{' '}
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit{' '}
      </button>
    </form>
  )
}
