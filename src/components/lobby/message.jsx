import React from 'react';
import getAvatar from '../../lib/avatar';

export const Message  =  (props ) =>  {
	const { message } = props;
	const side = message.source === 'SERVER' ? 'right': 'left';
	const cssclass = `message  ${side} appeared`,
		src = getAvatar(message.source == 'SERVER'? 'Admin':message.senderName);
	return (
		<li className={cssclass}>
			<img className="avatar" src={src} />
			<div className="text_wrapper">
				<div className="text" style={{wordWrap: 'break-word'}}>
					{message.message}
				</div>
			</div>
		</li>
	)
};

