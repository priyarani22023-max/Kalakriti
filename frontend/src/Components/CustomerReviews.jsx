import React from "react";

function CustomerReviews() {
  return (
    <>
      <hr />
      <h2 className="h2 text-center">CUSTOMER REVIEWS</h2>
      <div className="container">
        <div className="gird">
          <div className="row">
            <div className="col-3">
              <div
                className="card border-primary mb-3 me-3"
                style={{ maxwidth: "18rem" }}
              >
                <div className="card-header">Sarah Johnson</div>
                <div className="card-body">
                  <h5 className="card-title">Amazing Experience</h5>
                  <p className="card-text">
                    The website was easy to use, the service was excellent, and
                    I received quick support whenever I needed help. It efficiently delivered what i was looking for.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="card border-success mb-3 me-3"
                style={{ maxwidth: "18rem" }}>
              
                <div className="card-header">Priya Sharma</div>
                <div className="card-body">
                  <h5 className="card-title">Excellent Service</h5>
                  <p className="card-text">
                   The experience was smooth from start to finish. The team was responsive, professional, 
                   and delivered exactly what I was looking for.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
                <div
                className="card border-danger mb-3 me-3"
                style={{ maxwidth: "18rem" }}>
              
                <div className="card-header">Neha Patel</div>
                <div className="card-body">
                  <h5 className="card-title">Excellent Service</h5>
                  <p className="card-text">
                   The experience was smooth from start to finish. The team was responsive, professional, 
                   and delivered exactly what I was looking for.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
                <div
                className="card border-warning mb-3 me-3"
                style={{ maxwidth: "18rem" }}>
              
                <div className="card-header">Rahul Verma</div>
                <div className="card-body">
                  <h5 className="card-title">Excellent Service</h5>
                  <p className="card-text">
                   The experience was smooth from start to finish. The team was responsive, professional, 
                   and delivered exactly what I was looking for.
                  </p>
                </div>
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
