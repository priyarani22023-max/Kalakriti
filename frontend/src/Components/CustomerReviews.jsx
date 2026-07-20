import React from "react";

function CustomerReviews() {
  return (
    <>
      <hr />
      <h2 className="text-center mb-4">CUSTOMER REVIEWS</h2>

      <div className="container">
        <div className="row g-4 justify-content-center">

          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="card border-primary h-100"
              style={{ maxWidth: "18rem", margin: "auto" }}
            >
              <div className="card-header">Sarah Johnson</div>
              <div className="card-body">
                <h5 className="card-title">Amazing Experience</h5>
                <p className="card-text">
                  The website was easy to use, the service was excellent,
                  and I received quick support whenever I needed help.
                  It efficiently delivered what I was looking for.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="card border-success h-100"
              style={{ maxWidth: "18rem", margin: "auto" }}
            >
              <div className="card-header">Priya Sharma</div>
              <div className="card-body">
                <h5 className="card-title">Excellent Service</h5>
                <p className="card-text">
                  The experience was smooth from start to finish.
                  The team was responsive, professional, and delivered
                  exactly what I was looking for.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="card border-danger h-100"
              style={{ maxWidth: "18rem", margin: "auto" }}
            >
              <div className="card-header">Neha Patel</div>
              <div className="card-body">
                <h5 className="card-title">Excellent Service</h5>
                <p className="card-text">
                  The experience was smooth from start to finish.
                  The team was responsive, professional, and delivered
                  exactly what I was looking for.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="card border-warning h-100"
              style={{ maxWidth: "18rem", margin: "auto" }}
            >
              <div className="card-header">Rahul Verma</div>
              <div className="card-body">
                <h5 className="card-title">Excellent Service</h5>
                <p className="card-text">
                  The experience was smooth from start to finish.
                  The team was responsive, professional, and delivered
                  exactly what I was looking for.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <hr />
    </>
  );
}

export default CustomerReviews;