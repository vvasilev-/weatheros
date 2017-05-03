/* @flow */

/**
 * The external dependencies.
 */
import React from 'react';

/**
 * The internal dependencies.
 */
import MyLocationButton from 'components/my-location-button';

/**
 * Render the application.
 *
 * @return {React.Element}
 */
const App = (): React$Element<any> => (
	<div>
		Weatheros!

		<MyLocationButton />
	</div>
);

export default App;
