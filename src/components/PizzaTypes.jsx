import React, { Component } from "react";

class PizzaTypes extends Component {
constructor(props) {
    super();
}
		
	render() {
		return (
			<div className="container-fluid services">
				<div className="row">
					<h2 className="text-center">{this.props.title} Types</h2>
					<div className="col-lg-3">
						<div className="thumbnail">
							<img src="images/piz5.jpg" alt="..." />
							<div className="caption">
								<h3>Cheese Pizza</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
									sit necessitatibus provident nesciunt nam a, voluptate minima,
									quos delectus corrupti dolorum enim mollitia inventore. Odio
									rem nostrum tenetur labore temporibus!
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="thumbnail">
							<img src="images/piz6.jpg" alt="..." />
							<div className="caption">
								<h3>Bukom Pizza</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
									sit necessitatibus provident nesciunt nam a, voluptate minima,
									quos delectus corrupti dolorum enim mollitia inventore. Odio
									rem nostrum tenetur labore temporibus!
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="thumbnail">
							<img src="images/piz8.jpg" alt="..." />
							<div className="caption" />
							<h3>Pepperoni Pizza</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
								sit necessitatibus provident nesciunt nam a, voluptate minima,
								quos delectus corrupti dolorum enim mollitia inventore. Odio rem
								nostrum tenetur labore temporibus!
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="thumbnail">
						<img src="images/piz9.jpg" alt="..." />
						<div className="caption">
							<h3>Vegetable Pizza</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
								sit necessitatibus provident nesciunt nam a, voluptate minima,
								quos delectus corrupti dolorum enim mollitia inventore. Odio rem
								nostrum tenetur labore temporibus!
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default PizzaTypes;
