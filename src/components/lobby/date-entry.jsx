import React from 'react';

export const DateEntry  =  (props ) =>  {
	const { date } = props;
	return (
		<li className="yakchat-date-entry">
			<div className="rebelchat-hr">
				<span className="rebelchat-hr-title">
					{date}
				</span>
			</div>
		</li>
	)
};