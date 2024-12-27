import './Contact.scss';

export function Contact() {
	return (
		<div className="Contact container">
			<h1>Contact</h1>
			<div className="cards">
				<div className="item">
					<p>Phone</p>
					<a href="tel:+7(499) 777-77-77">+7 (499) 777-77-77</a>
				</div>
				

				<div className="item">
					<p>Address</p>
					<h2>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h2>
				</div>
				
			
			</div>
			
		</div>
	);
}
