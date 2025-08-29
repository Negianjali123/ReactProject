import Designation from "../Component/Designation"
export default function Registration() {
    return (
        <>
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <div className="card registercardsize">
                    <div className="card-tittle mt-3">
                        <h3 className="text-center titlename">Sign UP</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-1">
                                <label for="Name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="registername" />
                            </div>
                            <div className="mt-2">
                                <label for="designation" className="form-label font-medium text-gray-900">
                                    Designation
                                </label>

                                <select
                                    id="designationid"
                                    name="designation"
                                    className="form-control"
                                // onChange={handleChange}
                                >
                                    <option value="">Select Designation</option>
                                    {Designation.map(({ id, name }) => (
                                        <option key={id} value={id}>
                                            {name}
                                        </option>
                                    ))}
                                </select>


                            </div>
                            <div className="my-2">
                                <label for="InputEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="InputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="Password" />
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" className="btn btnhover w-100 mb-3">Submit</button>
                            <a href="/" type="submit" className="btn btnhover w-100 mb-3">back</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}