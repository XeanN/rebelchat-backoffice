import React from 'react';

export const Message  =  (props ) =>  {
	const { message } = props;
	const side = message.source === 'SERVER' ? 'right': 'left';
	const cssclass = `message  ${side} appeared`
	return (
		<li className={cssclass}>
			<div className="avatar"></div>
			<div className="text_wrapper">
				<div className="text">
					{message.message}
				</div>
			</div>
		</li>
	)
};

